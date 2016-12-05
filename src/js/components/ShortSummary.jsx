var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var ShortSummary = React.createClass ({

	render: function () {
		var droneData = droneStore.getDroneStrikes();
		var numStrikes = droneData.strike.length;
		for (var i = 0; i < numStrikes; i++) {
		var thisStrikeMaxDeaths = droneData.strike[i].deaths_max;
		if (isNaN(thisStrikeMaxDeaths) === false) {
			maxDeaths += thisStrikeMaxDeaths
			}
		}


		return (
			<div>

			</div>
		)
	}

})

module.exports = ShortSummary;
