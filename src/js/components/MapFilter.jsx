var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var YearFilter = require('./YearFilter.jsx');
var CountryFilter = require('./CountryFilter.jsx');

var MapFilter = React.createClass({

	render: function(){
		return (
			<form className="cf hidden">
				<YearFilter onChange={this.props.handleFilter} />
			</form>
		)
	},

	handleFilter: function (array) { 
      this.setState({ 
        filteredArray: array 
      });
    }
});

module.exports = MapFilter;