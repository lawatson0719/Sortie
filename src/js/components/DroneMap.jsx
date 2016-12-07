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
    /*
      var data = this.props.data;
      var latitude = +data.lat;
      var longitude = +data.lon;
      
      return {
        lat: latitude,
        lon: longitude,
        zoom: 8,
      };
    */
  },

  componentWillReceiveProps: function (nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    this.setState({
      data: nextProps,
      markers: []
    });  
    return null;
  },

  clearMap: function () {
    console.log("clear map function received!!!");
    // this.state.markers.clearLayers();
    // console.log({this.refs.leafletref});
  },

  render : function() {

    var zoom = 4;
    // var markers = this.state.markers;
    var position = [0,0];
    var data

    // console.log('this.state.data: ' + JSON.stringify(this.state.data));
    if (this.state === null) {
      return null;
    }
      
    data = this.state.data.data;

    var filteredData = [];

    this.state.index = 1;

    // country
    // if country === all skip 
    // for (var j = 0; j < data.length; j++) {
    //   if (data[j].country === "Pakistan") {  
    //     filteredData.push(data[j]);

    //   } else if (data[j].country === "Yemen") {  
    //     filteredData.push(data[j]);
  
    //   } else if (data[j].country === "Somalia") {  
    //     filteredData.push(data[j]);
    //   }
    // }
    // console.log('filteredData.length: ' + filteredData.length);

    // year
    // if year === all skip 
    // for (var i = 0, len = clonedData.length; i < len; i++) {
    //   if (clonedData[i].year !== "Yemen") {  
    //     clonedData.splice()
    //   }
    // }

    // if ( country === all) && (year == all) {
    //    no filtering
    // } else { 
    //    filter country 
    // }

    for (var i = 0; i < data.length; i++) {
        position = [ data[ i ].lat, data[ i ].lon ];
        this.state.markers.push(<DroneMarker key={i} position={position} strike={data[i]} onMarkerClick={this.props.onMarkerClick} />);
      }
    

    
    
    return (
      <Map center={position} zoom={zoom} ref="leafletref">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url='https://api.mapbox.com/styles/v1/montytotten/ciwf2pmjd00382plko7jgoukd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg'
        />
        {this.state.markers}
      </Map>
    );
  }
});


module.exports = DroneMap;

// LINK FOR MAP WITH ALL STRIKE DATA POINTS
// https://api.mapbox.com/styles/v1/montytotten/ciw8ae2bw000w2qme1ie8s9cf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg




// ReactDOM.render( <DroneMap />, document.getElementById( 'container' ) );