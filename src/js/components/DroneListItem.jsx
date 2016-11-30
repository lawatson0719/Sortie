var React = require('react');
var ReactDOM = require('react-dom')


var DroneDetails = require('./DroneDetails.jsx');
var DroneDeaths = require('./DroneDeaths.jsx')
var DroneLocation = require('./DroneLocation.jsx')
var DroneCivilians = require('./DroneCivilians.jsx')
var DroneDate = require('./DroneDate.jsx')
var DroneMap = require('./DroneMap.jsx');

var DroneListItem = React.createClass({

	getInitialState: function () {
		return {
			detailsVisible: false
		}
	},

	render: function () {
		var details;

		// var { number, country, deaths } = this.props.data;

		var data = this.props.data;
		var number = data.number;
		var country = data.country;
		var location = data.location;
		var deaths = data.deaths;
		var civilians = data.civilians;
		var injuries = data.injuries;
		var children = data.children;
		var date = data.date;


		if (this.state.detailsVisible) {
			details = <DroneDetails data={data} />
		}

		return (
			<div>
				<h3><DroneLocation data={data} /></h3>
				<DroneDate data={data} />
				<button onClick={this.handleDetailsClick}>Display Narrative</button>
				{details}
				<DroneDeaths data={data} />
				<DroneCivilians data={data} />
				<div id="container"></div>
				
			</div>
		);

	},


	handleDetailsClick: function () {
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	}
});


module.exports = DroneListItem;

// <p>{date}</p>
// <p>Deaths: {deaths}</p>
// 				<p>Civilians: {civilians}</p>
// 				<p>Children: {children}</p>
// 				<p>Injured: {injuries}</p>