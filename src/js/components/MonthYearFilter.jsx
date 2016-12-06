var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var MonthYearFilter = React.createClass ({


	render: function () {
		
 
		return (
			
				<select className="filters increment">
					<option value="Month">Month</option>
					<option value="Year">Year</option>
				</select>
			
				
		)
	}

})

module.exports = MonthYearFilter;