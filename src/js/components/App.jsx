var React = require('react');
var Link = require('react-router').Link;

var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')
var GrandTotals = require('./grandTotals.jsx');
var TotalsView = require('./TotalsView.jsx');
var CivilianTotalsView = require('./CivilianTotalsView.jsx');
var Map = require('./Map.jsx')
var Stats = require('./Stats.jsx');
var droneStore = require('../stores/droneStore.js');




function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var App = React.createClass({	

	getInitialState: function () {

		var _that = this,
			d     = droneStore.fetchDroneStrikes();

		d.done( function(){

			console.log( "updating" );
			_that.updateDrones();
		} );

		console.log( d );

		return {
			drones: d
		};
	},

	componentWillMount: function () {
		droneStore.on('update', this.updateDrones);
	},

	updateDrones: function () {
		this.setState({
			drones: droneStore.getDroneStrikes()
		});
	},

	render: function () {
			
		return (
			
			<div>
				<Overlay />	
				{this.props.children}
			</div>
		)
	}
})


module.exports = App;