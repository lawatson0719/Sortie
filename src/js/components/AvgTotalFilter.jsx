var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var AvgTotalFilter = React.createClass ({

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

        var totalStrikes = this.state.drones.length
        var totalDeaths = 0

        for (var i = 0; i < totalStrikes; i++) {
            var thisStrikeMaxDeaths = parseInt(this.state.drones[i].deaths_max);
            if (isNaN(thisStrikeMaxDeaths) === false) {
                totalDeaths += thisStrikeMaxDeaths;
            }
        }
		
		return ( 
           <select className="filters numbers">
             <option value="Average">Average</option>
             <option value="Total">Total</option>
           </select>     
		)
	}

})

module.exports = AvgTotalFilter;