var React = require('react');
var ReactDOM = require('react-dom')
var Link = require('react-router').Link;


var DroneList = require('./DroneList.jsx')
var DroneDetails = require('./DroneDetails.jsx')
var Overlay = require('./Overlay.jsx')

var Map = require('./Map.jsx')
var Stats= require('./Stats.jsx')
var DroneMap = require('./DroneMap.jsx')
var droneStore = require('../stores/droneStore');


var GrandTotals = require('./GrandTotals.jsx');
var TotalsView = require('./TotalsView.jsx');
var CivilianTotalsView = require('./CivilianTotalsView.jsx');
var Map = require('./Map.jsx')
var Stats = require('./Stats.jsx');




function getActiveClass (path) {
	var current = window.locatione.hash.slice(1);
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

