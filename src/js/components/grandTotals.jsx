var React = require('react');
var ReactDOM = require('react-dom');

// var droneStore = require('../stores/droneStore.js');
var TotalsView = require('./TotalsView.jsx');
var CivilianTotalsView = require('./CivilianTotalsView.jsx');

var grandTotals = React.createClass ({

	render: function () {
		return (
			<section className="description cf" id="non-totals">

				<div className="box">
					<h2>Casualties</h2>
					<div>
						<CivilianTotalsView />
						<TotalsView />
					</div>	
				</div>
			</section>
		)
	}

})

module.exports = grandTotals;