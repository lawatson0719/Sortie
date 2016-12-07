var React = require('react');
var ReactDom = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var Casualties = require('./Casualties.jsx');

var CivilianTotals = React.createClass({


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
        var maxCivilDeaths = 0;

        for (var i = 0; i < numStrikes; i++) {
            var split = parseInt(this.state.drones[i].civilians.split('-').pop());
            var thisStrikeMaxCivilDeaths = split;
            if (isNaN(thisStrikeMaxCivilDeaths) === false) {
                maxCivilDeaths += thisStrikeMaxCivilDeaths
            }
        }

		
		return (
				<div id="civilian" className="casualties">
                    <h4>Total</h4>
                    <div>{maxCivilDeaths}</div>
                </div>
		)
	}
});

module.exports = CivilianTotals;