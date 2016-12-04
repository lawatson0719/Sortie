var React = require('react');

var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')

var Link = require('react-router').Link;


function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var AppHome = React.createClass({
	render: function () {
			
		return (
			<div>
				<Overlay />
				<header>
					<Link to="/" className={getActiveClass('/')}>Home</Link>
				</header>
				<main>

					<h1>Drone Strikes</h1>
					<DroneList />
					
				</main>
			</div>
		)
	}
})

module.exports = AppHome;


