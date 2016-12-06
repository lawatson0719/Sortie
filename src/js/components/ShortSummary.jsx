var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var ShortSummary = React.createClass ({

	

	render: function () {
		// var droneData = droneStore.getDroneStrikes();
		// var numStrikes = droneData.strike.length;
		// var thisStrikeMaxDeaths = droneData.strike[i].length - 1.narrative;
		// if (isNaN(thisStrikeMaxDeaths) === false) {
		// 	maxDeaths += thisStrikeMaxDeaths
		// 	}


		return (
			<div className="description">
				<h2>SUMMARY</h2>
				<p className="default">Click data point on graph to show a brief summary</p>
			</div>
		)
	}

})

module.exports = ShortSummary;
