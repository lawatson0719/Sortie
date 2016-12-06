var React = require('react');
var ReactDOM = require('react-dom')

var DroneList = require('./DroneList.jsx')
var DroneDetails = require('./DroneDetails.jsx')
var Overlay = require('./Overlay.jsx')
var Map = require('./Map.jsx')
var Stats= require('./Stats.jsx')
var DroneMap = require('./DroneMap.jsx')
var droneStore = require('../stores/droneStore');


var Link = require('react-router').Link;


function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({
	
	render : function () {
		// var data = this.state.data;

		// console.log( "data: ", data );
		
		return (
			<div>	
				<Overlay />
				{this.props.children}
				
				


			</div>
		)
	}
})

module.exports = App;

