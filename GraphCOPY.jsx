var React = require('react');
var d3 = require('d3');
var droneStore = require('../stores/droneStore.js');
var $ = require('jquery')

// var data = require('../stores/AllJSONData.json')

// $.getJSON('../stores/AllJSONData.json', function(json) {
//     console.log(json); 
// });


// var ReactDOM = require('react-dom');
// var tween = require('TWEEN.js');
// var $ = require('jquery');

var Graph = React.createClass({
    getInitialState: function () {

        var s = droneStore.getDroneStrikes();

        return {
            drones   : s,
            chartId  : 'lineChart',
            duration : 1500,
            delay    : 500
        }
    },

    getArray : function ( s ) {

        var dataArray = [];
        var inputData = s;

        for (var i = 0; i < this.state.drones.length; i++) {
            var graphData = {}
                graphData.date = inputData[i].date.slice(0, inputData[i].date.length -14);
                graphData.label = 'deaths';
                graphData.value = +inputData[i].deaths_max;
            
            if (isNaN(graphData.value) === true) {
                     graphData.value = 0;
            }
            
            dataArray.push(graphData);
            console.log( graphData )
        }

        var obj = {};

        obj.lineChart = dataArray;
        
        return obj;
    },

    componentReceivedData : function () {

        var data = this.getArray( this.state.drones );

        console.log( "received data", data.lineChart );

        this.setState({ data: data });

        // parse helper functions on top
        var parse = d3.time.format('%Y-%m-%d').parse;

        // data manipulation first
        data.lineChart = data.lineChart.map( function( datum ){

            datum.date = parse( datum.date );
            return datum;
        });
        console.log( "recieved: " + data )
        this.reset();
    },


    componentWillMount: function () {

        var _this = this,
            resizeTimer;

        // this.drawLineChart( this.state.chartId, this.state.data.lineChart, this.state.duration );
        window.addEventListener( "resize", function(){

            clearTimeout( resizeTimer );
            
            resizeTimer = setTimeout( function() {

                console.log( "merf" );
                // Run code here, resizing has "stopped"  
                _this.reset.call( _this );

            }, 250 );
        } );

        droneStore.on( 'update', function () {
            
            _this.setState({
                drones: droneStore.getDroneStrikes()
            })

            _this.componentReceivedData();
        });
    },
    
    componentWillUnmount: function() {
        window.removeEventListener( "resize", this.reset );
    },

    render: function () {

        return (
            <div className="graph">
                <div className="charts--container" id="lineChart" >
                    <svg id="lineChartSVG" className="lineChart--svg">
                        <defs>
                            <linearGradient id="lineChart--gradientBackgroundArea" x1="0" x2="0" y1="0" y2="1">
                                <stop className="lineChart--gradientBackgroundArea--top" offset="0%" />
                                <stop className="lineChart--gradientBackgroundArea--bottom" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g className="inner"></g>
                        <g className="circleContainer"></g>
                    </svg>
                </div>
            </div>
        );
    },

    reset : function(){

       var data = [], yearStruck;

       if( this.state === null ){ return null; }
   
       for ( var j = 0; j < this.state.data.lineChart.length; j++) {

           yearStruck = parseInt( this.state.data.lineChart[ j ].date.getFullYear() );
         
           if( this.props.year === 'all' || this.props.year === yearStruck ){
               
               data.push( this.state.data.lineChart[ j ] );    
           }
       }

       this.drawLineChart( this.state.chartId, data, this.state.duration ); 
   },
  
    drawLineChart: function ( elementId, data, DURATION ){

        // TODO code duplication check how you can avoid that
        var containerEl = document.getElementById( elementId ),
            width = containerEl.clientWidth,
            height = width * 0.6,

            margin = {
                top : 30,
                right : 10,
                left : 10
            },

            detailWidth = 98,
            detailHeight = 55,
            detailMargin = 10,
            padding = 10,

            container = d3.select(containerEl),

            svg = container.select('svg')
                .attr('width', width)
                .attr('height', height + margin.top),

            inner = svg.select( '.inner' ).html(""),
            circleContainer = svg.select( '.circleContainer' ).html(""),

            x = d3.time.scale().range([padding, width - detailWidth]),
            y = d3.scale.linear().range([height, 0]),
            
            xAxis = d3.svg.axis().scale(x)
                .ticks(8)
                .tickSize(-height),
            
            yAxis = d3.svg.axis().scale(y)
                .ticks(6)
                .tickSize(-width)
                .orient("right"),

            area = d3.svg.area()
                .interpolate( 'linear' )
                .x( function( d ){ return x(d.date) + detailWidth / 2; })
                .y0( height )
                .y1( function( d ){ return y( d.value ); } ),

            line = d3.svg.line()
                .interpolate( 'linear' )
                .x( function( d ){ return x( d.date ) + detailWidth / 2; } )
                .y( function( d ){ return y( d.value ); }),

            startData = data.map(function(datum) {
                return {
                    date: datum.date,
                    value: 0
                };
            });

            // Compute the minimum and maximum date, and the maximum price.
            x.domain([data[0].date, data[data.length - 1].date]);
            // hacky hacky hacky :(
            y.domain([ 0, d3.max(data, function(d) { return d.value; }) + 700 ] );

        inner.append( 'g' )
            .attr( 'class', 'lineChart--xAxis' )
            .attr( 'transform', 'translate(' + detailWidth / 2 + ',' + ( height + 7 ) + ')')
            .call( xAxis );

        inner.append('g')
            .attr('class', 'lineChart--yAxis')
            .attr('transform', 'translate(0)')
            .call(yAxis);

        inner.append('path')
            .datum(startData)
            .attr('class', 'lineChart--areaLine')
            .attr('d', line)
            .transition()
            .duration(DURATION)
            .delay(DURATION / 2)
            .attrTween('d', tween(data, line))
            .each('end', function() {
                drawCircles(data);
            });

        inner.append('path')
            .datum(startData)
            .attr('class', 'lineChart--area')
            .attr('d', area)
            .transition()
            .duration(DURATION)
            .attrTween('d', tween(data, area));

        // Helper functions!!!
        function drawCircle(datum, index) {
            
            circleContainer.datum(datum)
                .append('circle')
                .attr('class', 'lineChart--circle')
                .attr('r', 0)
                .attr(
                    'cx',
                function(d) {
                    return x(d.date) + detailWidth / 2;
                } 
            )
            .attr(
                'cy',
                function(d) {
                    return y(d.value);
                }
            )
            .on('mouseenter', function(d) {
                d3.select(this)
                    .attr(
                        'class',
                        'lineChart--circle lineChart--circle__highlighted'
                    )
                    .attr('r', 7);

                d.active = true;
                showCircleDetail(d);
            })
            .on('mouseout', function(d) {
                d3.select(this)
                    .attr(
                        'class',
                        'lineChart--circle'
                    )
                .attr('r', 6);

                if (d.active) {
                    hideCircleDetails();
                    d.active = false;
                }
            })
            .on('click touch', function(d) {
                if (d.active) {
                    showCircleDetail(d)
                } else {
                    hideCircleDetails();
                }
            })
            .transition()
            .delay( DURATION / 1000 * index)
            .attr( 'r', 6 );
        }

        function drawCircles(data) {

            circleContainer.html("");

            data.forEach(function(datum, index) {

                drawCircle(datum, index);
            });
        }

        function hideCircleDetails() {

            circleContainer.selectAll('.lineChart--bubble').remove();
        }

        function showCircleDetail(data) {
            var details = circleContainer.append('g')
                    .attr('class', 'lineChart--bubble')
                    .attr( 'transform',
                        function() {
                            var result = 'translate(';
                                result += x(data.date);
                                result += ', ';
                                result += y(data.value) - detailHeight - detailMargin;
                                result += ')';

                            return result;
                        }
            );

            details.append('path')
                .attr('d', 'M2.99990186,0 C1.34310181,0 0,1.34216977 0,2.99898218 L0,47.6680579 C0,49.32435 1.34136094,50.6670401 3.00074875,50.6670401 L44.4095996,50.6670401 C48.9775098,54.3898926 44.4672607,50.6057129 49,54.46875 C53.4190918,50.6962891 49.0050244,54.4362793 53.501875,50.6670401 L94.9943116,50.6670401 C96.6543075,50.6670401 98,49.3248703 98,47.6680579 L98,2.99898218 C98,1.34269006 96.651936,0 95.0000981,0 L2.99990186,0 Z M2.99990186,0')
                .attr('width', detailWidth)
                .attr('height', detailHeight);

            var text = details.append('text')
                .attr('class', 'lineChart--bubble--text');

            text.append('tspan')
                .attr('class', 'lineChart--bubble--label')
                .attr('x', detailWidth / 2)
                .attr('y', detailHeight / 3)
                .attr('text-anchor', 'middle')
                .text(data.label);

            text.append('tspan')
                .attr('class', 'lineChart--bubble--value')
                .attr('x', detailWidth / 2)
                .attr('y', detailHeight / 1.7)
                .attr('text-anchor', 'middle')
                .text(data.value);
        }

        function tween( b, callback ){
            return function( a ) {

                var i = d3.interpolateArray(a, b);

                return function( t ) {
                    return callback( i( t ) );
                };
            };
        }
    }
});

module.exports = Graph;
