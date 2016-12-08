// var React = window.React;
var React    = require('react');
var ReactDOM = require('react-dom');
// var ReactLeaflet = require('react-leaflet')
// var Leaflet = require('leaflet')
var droneStore = require('../stores/droneStore.js');

var DroneDeaths = require('./DroneDeaths.jsx');
var DroneLocation = require('./DroneLocation.jsx');
var DroneDate = require('./DroneDate.jsx');
var DroneMarker = require('./DroneMarker.jsx');
var droneStore = require('../stores/droneStore');

// import React from 'react';
// import { render } from 'react-dom';
var Map       = require('react-leaflet').Map;
var Marker    = require('react-leaflet').Marker;
var Popup     = require('react-leaflet').Popup;
var TileLayer = require('react-leaflet').TileLayer;

// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
var DroneMap = React.createClass({
  
  getInitialState : function(){
    return null;
  },

  componentWillReceiveProps: function (nextProps) {
    
    this.setState({
      data : nextProps, 
      markers : [],
      year : nextProps.year
    });  
    return null;
  },

  // filterInt: function (value) {
  //   if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
  //     return Number(value);
  //   return NaN;
  // },

  render : function() {

    var zoom = 3;
    var position = [14.39,44.9];
    var markers = [];

    var yearStruck;
    var year;

    if( this.state === null ){ return null; }
    
    year = this.state.year;

    this.state.index = 1;
    
    for ( var j = 0; j < this.props.data.length; j++) {

        position = [ this.props.data[ j ].lat, this.props.data[ j ].lon ];
        yearStruck = parseInt( this.props.data[ j ].date.split( '-' ).shift() );
      
        if( position[0] !== '' && position[1] !== '' ){

            if( year === 'all' || yearStruck == this.props.year ){
                markers.push(
                    <DroneMarker
                        key={j}
                        position={position}
                        strike={this.props.data[j]}
                        onMarkerClick={this.props.onMarkerClick} />
                );
            }
        }

    // var _this = this;
    // // if (year === 'all') {

    // //   markers = this.props.data.map(function(data) {

    // //     return <DroneMarker key={i} position={[data.lat, data.lon]} strike={data} onMarkerClick={_this.props.onMarkerClick} />;

    // //   })

    // // } else  {


    // for (var i = 0; i < this.props.data.length; i++) {
      
    //   var tester = this.filterInt(parseInt(this.props.data[i].lat));
      
    //   if (isNaN(tester) === false) {
    //     position = [ this.props.data[i].lat, this.props.data[i].lon ];

    //     if (this.props.year === 'all') {
    //       markers.push(<DroneMarker key={i} position={position} strike={this.props.data[i]} onMarkerClick={this.props.onMarkerClick} />);
    //     } else {
    //       var yearStruck = parseInt(this.props.data[i].date.split('-').shift())
          
    //       if (yearStruck == this.props.year) {
    //         markers.push(<DroneMarker key={i} position={position} strike={this.props.data[i]} onMarkerClick={this.props.onMarkerClick} />);
    //       }
    //     }
    //   }

    }
    
      
    return (
      <Map center={position} zoom={zoom} ref="leafletref">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url='https://api.mapbox.com/styles/v1/montytotten/ciwf2pmjd00382plko7jgoukd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg'
        />
        {markers}
      </Map>
    );
  }
});

module.exports = DroneMap;

// LINK FOR MAP WITH ALL STRIKE DATA POINTS
// https://api.mapbox.com/styles/v1/montytotten/ciw8ae2bw000w2qme1ie8s9cf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg




// ReactDOM.render( <DroneMap />, document.getElementById( 'container' ) );