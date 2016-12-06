var React = require('react');
var ReactDOM = require('react-dom');

// var droneStore = require('../stores/droneStore.js');
var TotalsView = require('./TotalsView.jsx');
var CivilianTotalsView = require('./CivilianTotalsView.jsx');

var GrandTotals = React.createClass ({

	render: function () {
		return (
			<section>
				<h2>Casualties</h2>
					<CivilianTotalsView />
					<TotalsView />
			</section>
		)
	}

})

module.exports = GrandTotals;