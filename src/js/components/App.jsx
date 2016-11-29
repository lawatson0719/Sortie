var React = require('react');

var DroneList = require('./DroneList.jsx')

var Link = require('react-router').Link;

function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({
	render: function () {
		
		return (
			<div>
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

module.exports = App;


