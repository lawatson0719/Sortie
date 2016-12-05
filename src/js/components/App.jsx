var React = require('react');

var DroneList = require('./DroneList.jsx');
var Overlay = require('./Overlay.jsx');
var Map = require('./Map.jsx');
var Stats = require('./Stats.jsx');

var Link = require('react-router').Link;


function getActiveClass (path) {
	var current = window.location.hash.slice(1);
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
