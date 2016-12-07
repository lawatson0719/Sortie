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

    // bind: function () {

    //   this.handleChange = this.handleChange.bind(this);
    //   // this.handleSubmit = this.handleSubmit.bind(this);
    // },
  

	render: function(){
      var all = []
      var pakistan = [];
      var yemen = [];
      var somalia = [];
  

    var drones = this.state.drones.length;


    for (var i = 0; i < drones; i++) {
      
      if (this.state.drones[i].country === "Pakistan" || this.state.drones[i].country === "Yemen" || this.state.drones[i].country === "Somalia") {  
        all.push(this.state.drones[i].country);
      }
      
    }
    console.log(all);

    for (var j = 0; j < drones; j++) {
      
      if (this.state.drones[j].country === "Pakistan") {  
        pakistan.push(this.state.drones[j].country);
        // console.log(Pakistan);

      } else if (this.state.drones[j].country === "Yemen") {  
        yemen.push(this.state.drones[j].country);

      } else if (this.state.drones[j].country === "Somalia") { 
        somalia.push(this.state.drones[j].country);
    
      } 
    }
    console.log(pakistan)
    console.log(yemen)
    console.log(somalia)

    // console.log('filteredData.length: ' + filteredData.length);

		return (
            <div className="map-container-years">
              <label className="country" htmlFor="country">Country</label>
              <select className="countries" onChange={this.handleCountryChange} value={this.state.filterCountry}>
                <option value="All">All</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Yemen">Yemen</option>
                <option value="Somalia">Somalia</option>
              </select>
            </div>
		)
	},

     handleCountryChange : function (e) {
      // console.log('you changed: ' + e.target.value);
      this.setState({filterCountry: e.target.value});
      // console.log(e.target.value);
    },
});

module.exports = CountryFilter;









