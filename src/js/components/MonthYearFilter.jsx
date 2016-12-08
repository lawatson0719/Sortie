var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var MonthYearFilter = React.createClass ({

	getInitialState: function () {
        return {
            drones: droneStore.getDroneStrikes(),
            filterYear: 'all'
        }
    },

    componentWillMount: function () {
        var _this = this;
        droneStore.on('update', function () {
            _this.setState({
                drones: droneStore.getDroneStrikes()
            })
        })
    },

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