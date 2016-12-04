var React = require('react');

var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')

var Link = require('react-router').Link;


function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var AppStats = React.createClass({
	render: function () {
			
		return (
			<div>
				<header>
					<div className="logo-container">
						<img className="logo" src="assets/images/whitelogo.png"/>
					</div>
					<nav>
						<a href="/">MAP</a>
					</nav>
				</header>
				<main>

					
				</main>
			</div>
		)
	}
})

module.exports = AppStats;
