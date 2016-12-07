var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var MapFilter = require('./MapFilter.jsx');

var YearFilter = React.createClass({

    getInitialState: function () {
        return {
            drones: droneStore.getDroneStrikes(),
            filterYear: 'all',
            year: 'all'

        }
    },

    componentWillMount: function () {
        var _this = this;
        droneStore.on('update', function () {
            _this.setState({
                drones: droneStore.getDroneStrikes()
            })
        })
    },

	render: function(){

        var drones = this.state.drones.length;
        // var all = [];
        // var sixteen = [];
        // var fifteen = [];
        // var fourteen = [];
        // var thirteen = [];
        // var twelve = [];
        // var eleven = [];
        // var ten = [];
        // var nine = [];
        // var eight = [];
        // var seven = [];
        // var six = [];
        // var five = [];
        // var four = [];
        // var three = [];
        // var two = [];

        // for (var i = 0; i < drones; i++) {
        //     var yearStruck = parseInt(this.state.drones[i].date.split('-').shift())
        //     all.push(yearStruck);
        // }
        // console.log(all);

        // for(var j = 0; j < drones; j++) {
        //     var yearFound = parseInt(this.state.drones[j].date.split('-').shift())
        //     if (yearFound === 2016) {
        //         sixteen.push(yearFound);
        //     } else  if (yearFound === 2015) {
        //         fifteen.push(yearFound);
        //     } else  if (yearFound === 2014) {
        //         fourteen.push(yearFound);
        //     } else  if (yearFound === 2013) {
        //         thirteen.push(yearFound);
        //     } else  if (yearFound === 2012) {
        //         twelve.push(yearFound);
        //     } else  if (yearFound === 2011) {
        //         eleven.push(yearFound);
        //     } else  if (yearFound === 2010) {
        //         ten.push(yearFound);
        //     } else  if (yearFound === 2009) {
        //         nine.push(yearFound);
        //     } else  if (yearFound === 2008) {
        //         eight.push(yearFound);
        //     } else  if (yearFound === 2007) {
        //         seven.push(yearFound);
        //     } else  if (yearFound === 2006) {
        //         six.push(yearFound);
        //     } else  if (yearFound === 2005) {
        //         five.push(yearFound);
        //     } else  if (yearFound === 2004) {
        //         four.push(yearFound);
        //     } else  if (yearFound === 2003) {
        //         three.push(yearFound);
        //     } else  if (yearFound === 2002) {
        //         two.push(yearFound);
        //     }  
        // }

        // console.log(five);

		return (
            <form className="cf hidden">
                <div className="map-container">      
                    <label className="year" htmlFor="year">Select Year</label>
                    <select className="years" onChange={this.handleYearChange} value={this.state.year}>
                        <option value={'all'} default>All Years</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                        <option value={2011}>2011</option>
                        <option value={2010}>2010</option>
                        <option value={2009}>2009</option>
                        <option value={2008}>2008</option>
                        <option value={2007}>2007</option>
                        <option value={2006}>2006</option>
                        <option value={2005}>2005</option>
                        <option value={2004}>2004</option>
                        <option value={2003}>2003</option>
                        <option value={2002}>2002</option>
                    </select>
                </div>
            </form>
		)
	},

    handleYearChange : function (e) {

      // console.log('you changed: ' + e.target.value);
      this.setState( { year : e.target.value } );
      
      console.log(e.target.value);
    },
});

module.exports = YearFilter;


