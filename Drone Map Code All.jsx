// var React = window.React;
var React    = require('react');
var ReactDOM = require('react-dom');
// var ReactLeaflet = require('react-leaflet')
// var Leaflet = require('leaflet')

var DroneDeaths = require('./DroneDeaths.jsx')
var DroneLocation = require('./DroneLocation.jsx')
var DroneDate = require('./DroneDate.jsx')
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
    this.state = { data: '' };
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
      data: nextProps
    });  
    return null;
  },

  render : function() {

    var zoom = 8;
    var markers = [];
    var position = [0,0];
    var data

    // console.log('this.state.data: ' + JSON.stringify(this.state.data));
    if (this.state === null) {
      return null;
    }
      
    data = this.state.data.data;

    this.state.index = 50;

    for (var i = 0, len = data.length; i < len; i++) {

      position = [ data[ i ].lat, data[ i ].lon ];
      markers.push( <Marker key={i} position={position}><Popup>
            <span><DroneLocation data={data [i]} /><DroneDeaths data={data [i]} /></span>
          </Popup></Marker> );
    }
    
    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://api.mapbox.com/styles/v1/montytotten/ciw8ae2bw000w2qme1ie8s9cf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg'
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