var React = require('react');

var droneStore = require('../stores/droneStore');
var DroneListItem = require('./DroneListItem.jsx');

var DroneList = React.createClass({

	getInitialState: function () {
		return {
			data: droneStore.fetchDroneStrikes()
		};
	},

	componentWillMount: function () {
		var _this = this;
		droneStore.on('update', function () {
			_this.setState({
				data: droneStore.getDroneStrikes()
			})
		})
	},

	render: function () {
		var droneListItems = this.state.data.map(function (data) {
			return <DroneListItem 
				key={data.number}
				data={data}
				/>;
		})
		return (
			<div>
				{droneListItems}
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

//<button onClick={this.handleLoadClick}>Load</button>