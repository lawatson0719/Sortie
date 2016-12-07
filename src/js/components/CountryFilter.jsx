var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var MapFilter = require('./MapFilter.jsx');

var CountryFilter = React.createClass({

    getInitialState: function () {
        return {
            drones: droneStore.getDroneStrikes(),
            filterCountry: 'all' 
            
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

    var filteredData = []
    var drones = this.state.drones.length;

    for (var j = 0; j < drones; j++) {
      if (this.state.drones[j].country === "Pakistan") {  
        filteredData.push(this.state.drones[j]);

      } else if (this.state.drones[j].country === "Yemen") {  
        filteredData.push(this.state.drones[j]);
  
      } else if (this.state.drones[j].country === "Somalia") {  
        filteredData.push(this.state.drones[j]);

      } 
    }
    console.log('filteredData.length: ' + filteredData.length);

		return (
            <div className="map-container-years">
              <label className="country" htmlFor="country">Country</label>
              <select className="countries" onChange={this.handleCountryChange} value={this.state.filterCountry}>
                <option value="all">All</option>
                <option value="pakistan">Pakistan</option>
                <option value="yemen">Yemen</option>
                <option value="somalia">Somalia</option>
              </select>
            </div>
		)
	},

     handleCountryChange : function (e) {
      // console.log('you changed: ' + e.target.value);
      this.setState({filterCountry: e.target.value});
      console.log(e.target.value);
    },
});

module.exports = CountryFilter;









