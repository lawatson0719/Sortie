// var React = window.React;
var React    = require('react');
var ReactDOM = require('react-dom');
// var ReactLeaflet = require('react-leaflet')
// var Leaflet = require('leaflet')

var DroneDeaths = require('./DroneDeaths.jsx')

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
    var _this = this;
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
          url='https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg'
        />
        <Marker position={position}>
          <Popup>
            <span>Marib Province. <br/>6 deaths.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
});


module.exports = DroneMap;

// ReactDOM.render( <DroneMap />, document.getElementById( 'container' ) );