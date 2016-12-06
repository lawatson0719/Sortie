var React = require('react');
var ReactDom = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var Casualties = require('./Casualties.jsx');

var CivilianTotals = React.createClass({

	render: function(){
		// var droneData = droneStore.getDroneStrikes();
		// var numStrikes = droneData.strike.length;
		// var maxCivilDeaths = 0;

		
		return (
				<div id="civilian" className="casualties">
                    <h4>Total</h4>
                    <div>0</div>
                </div>
		)
	}
});

module.exports = CivilianTotals;