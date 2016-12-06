var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var Casualties = require('./Casualties.jsx');

var Totals = React.createClass({

	render: function(){
		return (
				<div id="totals" className="casualties">
					<h4>Civilian</h4>
					<div>0</div>
				</div>
		)
	}
});

module.exports = Totals;