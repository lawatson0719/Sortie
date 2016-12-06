var React = require('react');

var droneStore = require('../stores/droneStore');
var DroneListItem = require('./DroneListItem.jsx');

var DroneList = React.createClass({

	
	render: function () {
		var droneListItems = this.state.data.map(function (data) {
			return (
				<DroneListItem 
				key={data.number}
				data={data}
				/>
			)
		})
		return (
			<div>
				
				{droneListItems.splice(droneListItems.length -1)}
			</div>

		)
	},

	handleLoadClick: function () {
		this.setState({
			
		})
		droneStore.fetchDroneStrikes();
	}
});

module.exports = DroneList;

