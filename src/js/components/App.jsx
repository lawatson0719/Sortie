var React = require('react');
var Link = require('react-router').Link;

var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')
var grandTotals = require('./grandTotals.jsx');
var TotalsView = require('./TotalsView.jsx');
var CivilianTotalsView = require('./CivilianTotalsView.jsx');
var Map = require('./Map.jsx')
var Stats = require('./Stats.jsx');



function getActiveClass (path) {
	var current = window.locatione.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({
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

