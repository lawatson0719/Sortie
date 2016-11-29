var React = require('react');

var DroneDetails = require('./DroneDetails.jsx');

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
				<h3>{number}. {location}, {country}</h3>
				<p>{date}</p>
				<button onClick={this.handleDetailsClick}>Display Narrative</button>

				{details}
				<p>Deaths: {deaths}</p>
				<p>Civilians: {civilians}</p>
				<p>Children: {children}</p>
				<p>Injured: {injuries}</p>
				
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