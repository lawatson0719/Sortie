// var React = window.React;
var React    = require('react');
var ReactDOM = require('react-dom');
// var ReactLeaflet = require('react-leaflet')
// var Leaflet = require('leaflet')
var droneStore = require('../stores/droneStore.js')

var DroneDeaths = require('./DroneDeaths.jsx')
var DroneLocation = require('./DroneLocation.jsx')

// import React from 'react';
// import { render } from 'react-dom';
var Map       = require('react-leaflet').Map;
var Marker    = require('react-leaflet').Marker;
var Popup     = require('react-leaflet').Popup;
var TileLayer = require('react-leaflet').TileLayer;

// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
var DroneMap = React.createClass({
  
  getInitialState : function(){
    var data = this.props.data
    var latitude = +data.lat;
    var longitude = +data.lon;

    return {
      lat: latitude,
      lon: longitude,
      zoom: 8,
    };
  },

  render : function() {
    var data = this.props.data
    var position = [this.state.lat, this.state.lon];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://api.mapbox.com/styles/v1/montytotten/ciw8ae2bw000w2qme1ie8s9cf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg'
        />
        <Marker position={position}>
          <Popup>
            <span><DroneLocation data={data} /><DroneDeaths data={data} /></span>
          </Popup>
        </Marker>
      </Map>
    );
  }
});


module.exports = DroneMap;

// LINK FOR MAP WITH ALL STRIKE DATA POINTS
// https://api.mapbox.com/styles/v1/montytotten/ciw8ae2bw000w2qme1ie8s9cf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg




// ReactDOM.render( <DroneMap />, document.getElementById( 'container' ) );