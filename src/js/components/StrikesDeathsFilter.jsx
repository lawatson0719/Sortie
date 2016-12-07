var React = require('react');
var droneStore = require('../stores/droneStore.js');

var StrikesDeathsFilter = React.createClass ({



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
				
			<select className="filters type">
				<option value="Strikes">Strikes</option>
				<option value="Deaths">Deaths</option>
			</select>
					
		)
	}

})

module.exports = StrikesDeathsFilter;