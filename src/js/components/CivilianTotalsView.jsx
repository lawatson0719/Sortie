var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var CivilianTotalsView = React.createClass ({

	render: function () {
		var droneData = droneStore.getDroneStrikes();
		var numStrikes = droneData.strike.length;
		var maxCivilDeaths = 0;

		for (var i = 0; i < numStrikes; i++) {
			var split = parseInt(droneData.strike[i].civilians.split('-').pop());
			var thisStrikeMaxCivilDeaths = split;
			if (isNaN(thisStrikeMaxCivilDeaths) === false) {
				maxCivilDeaths += thisStrikeMaxCivilDeaths
			}
		}

		return (
				<div id="totals" className="casualties">
					<h4>Civilian</h4>
					<div>{maxCivilDeaths}</div>
				</div>
			
		)
	}

})

module.exports = CivilianTotalsView;