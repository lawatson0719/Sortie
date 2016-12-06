var React = require('react');
var ReactDOM = require('react-dom');

// var droneStore = require('../stores/droneStore.js');
var Totals = require('./Totals.jsx');
var CivilianTotals = require('./CivilianTotals.jsx');
var Details = require('./Details.jsx');
var DroneLocation = require('./DroneLocation.jsx')

var Casualties = React.createClass({

	render: function(){
		// var droneData = droneStore.getDroneStrikes();
		// var numStrikes = droneData.strike.length;
		// var narrative = data.narrative;
		// for (var i = 0; i < numStrikes; i++) {
		// var thisStrikeNarrative = droneData.strike[i].narrative;
		// }
		var details = 'No data loaded. Click a marker.';

		if (this.props.strike) {
			details = (
				<div className="details">
					<h2>{this.props.strike.location}</h2>
					<h3>{this.props.strike.date}</h3>
                    <p className="dets">
                    	{this.props.strike.bij_summary_short || this.props.strike.narrative}
                    </p>
                </div>
			);
		}

		return (
			<section className="description cf" id="non-totals">
				{details}
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