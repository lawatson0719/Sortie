var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var Casualties = require('./Casualties.jsx');

var Totals = React.createClass({

	getInitialState: function () {
        return {
            drones: droneStore.getDroneStrikes()
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

	render: function(){

		var numStrikes = this.state.drones.length;
        var maxDeaths = 0;
        for (var i = 0; i < numStrikes; i++) {
            var thisStrikeMaxDeaths = parseInt(this.state.drones[i].deaths_max);
            if (isNaN(thisStrikeMaxDeaths) === false) {
                maxDeaths += thisStrikeMaxDeaths;
            }
        }

		return (
				<div id="totals" className="casualties">
					<h4>Civilian</h4>
					<div>{maxDeaths}</div>
				</div>
		)
	}
});

module.exports = Totals;