var React = require('react');
var ReactDOM = require('react-dom');

// var droneStore = require('../stores/droneStore.js');
var Totals = require('./Totals.jsx');
var CivilianTotals = require('./CivilianTotals.jsx');
var Details = require('./Details.jsx');

var Casualties = React.createClass({

	render: function(){
		// var droneData = droneStore.getDroneStrikes();
		// var numStrikes = droneData.strike.length;
		// var narrative = data.narrative;
		// for (var i = 0; i < numStrikes; i++) {
		// var thisStrikeNarrative = droneData.strike[i].narrative;
		// }
		return (
			<section className="description cf" id="non-totals">
				<div className="details">
                    <p className="dets">dets</p>
                </div>
				<div className="box">
					<h2>Casualties</h2>
				<div>
					<Totals />
					<CivilianTotals />
				</div>	
				</div>
			</section>
		)
	}
});

module.exports = Casualties;