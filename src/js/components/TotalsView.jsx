var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var TotalsView = React.createClass ({

	render: function () {
	var droneData = droneStore.getDroneStrikes();
	var numStrikes = droneData.strike.length;
	var maxDeaths = 0;
	for (var i = 0; i < numStrikes; i++) {
		var thisStrikeMaxDeaths = parseInt(droneData.strike[i].deaths_max);
		if (isNaN(thisStrikeMaxDeaths) === false) {
			maxDeaths += thisStrikeMaxDeaths
		}
	}
 
		return (
				<div id="totals" className="casualties">
					<h4>Totals</h4>
					<div>{maxDeaths}</div>
				</div>	
			)
	}

})

module.exports = TotalsView;