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

    // console.log( nextProps );

    // You don't have to do this check first, but it can help prevent an unneeded render
    this.setState({
      data : nextProps.data,
      markers : [],
      year : nextProps.year
    });  
    return null;
  },

  clearMap: function () {
    // console.log("clear map function received!!!");
    // this.state.markers.clearLayers();
    // console.log({this.refs.leafletref});
  },

  render : function() {

    var zoom = 4;
    // var markers = this.state.markers;
    var position = [14.39,44.9];
    var data;

    if (this.state === null) {
      return null;
    }
      
    data = this.state.data.data;

    this.state.index = 1;

  
    var year = this.state.year;
    var markers = [];
    var _this = this;
    if (year === 'all') {

      markers = this.props.data.map(function(data) {

        return <DroneMarker key={i} position={[data.lat, data.lon]} strike={data} onMarkerClick={_this.props.onMarkerClick} />;

      })

    } else  {

    for (var i = 0; i < this.props.data.length; i++) {

        position = [ this.props.data[ i ].lat, this.props.data[ i ].lon ];

        var yearStruck = parseInt(this.props.data[i].date.split('-').shift())
        
        if( yearStruck == this.props.year ){
          markers.push(<DroneMarker key={i} position={position} strike={this.props.data[i]} onMarkerClick={this.props.onMarkerClick} />);
        }

        //this.state.markers.push(<DroneMarker key={i} position={position} strike={data[i]} onMarkerClick={this.props.onMarkerClick} />);
      }
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