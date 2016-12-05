var React = require('react');

var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')

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
				<header>
                    <div className="logo-container">
                        <img className="logo" src="assets/images/whitelogo.png"/>
                    </div>
                    <nav>
                        <a href="map-mobile-tablet.html">MAP</a>
                    </nav>
                </header>
				<main>

					<h1>Drone Strikes</h1>
					<DroneList />
					
				</main>
			</div>
		)
	}
})

module.exports = App;


