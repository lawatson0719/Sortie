var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var AvgTotalFilter = require('./AvgTotalFilter.jsx');
var StrikesDeathsFilter = require('./StrikesDeathsFilter.jsx');

var StatsFilter = React.createClass ({


	render: function () {
		
 
		return (
			<form className="cf stats">
				<div className="filter-container">
					<AvgTotalFilter />
				</div>
				<div className="filter-container">
					<StrikesDeathsFilter />
				</div>
			</form>
			)
	}

})

module.exports = StatsFilter;