var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var MapFilter = require('./MapFilter.jsx');

var CountryFilter = React.createClass({

	render: function(){
		return (
            <div className="map-container-years">
                <label className="country" htmlFor="country">Country</label>
                <select className="countries">
                    <option value="pakistan">Pakistan</option>
                     <option value="yemen">Yemen</option>
                     <option value="somalia">Somalia</option>
                </select>
            </div>
		)
	}
});

module.exports = CountryFilter;









