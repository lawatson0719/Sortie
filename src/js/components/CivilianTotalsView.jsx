var React = require('react');
var droneStore = require('../stores/droneStore.js');

var CivilianTotalsView = React.createClass ({


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
    
    render: function () {
    
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
                <div id="totals" className="casualties">
                    <h4>Civilian</h4>
                    <div>{maxCivilDeaths}</div>
                </div>
            
            )
        }


})

module.exports = CivilianTotalsView;