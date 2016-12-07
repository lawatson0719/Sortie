// var React = window.React;
var React    = require('react');
var ReactDOM = require('react-dom');
// var ReactLeaflet = require('react-leaflet')
// var Leaflet = require('leaflet')

var DroneDeaths = require('./DroneDeaths.jsx');
var DroneLocation = require('./DroneLocation.jsx');

// import React from 'react';
// import { render } from 'react-dom';
var Map       = require('react-leaflet').Map;
var CircleMarker  = require('react-leaflet').CircleMarker;
var Popup     = require('react-leaflet').Popup;

// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
var DroneMarker = React.createClass({

  render : function() {
    return (
      <CircleMarker center={this.props.position} radius={4.8} onClick={this.handleClick} >
        <Popup>
          <span>
            <DroneLocation data={this.props.strike} />
            <DroneDeaths data={this.props.strike} />
          </span>
        </Popup>
      </CircleMarker>
    );
  },

  handleClick: function () {
    this.props.onMarkerClick(this.props.strike);
  }
});


module.exports = DroneMarker;

// LINK FOR MAP WITH ALL STRIKE DATA POINTS
// https://api.mapbox.com/styles/v1/montytotten/ciw8ae2bw000w2qme1ie8s9cf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg




// ReactDOM.render( <DroneMap />, document.getElementById( 'container' ) );