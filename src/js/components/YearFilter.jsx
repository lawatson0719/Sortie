var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var MapFilter = require('./MapFilter.jsx');

var YearFilter = React.createClass({

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

	render: function(){
		return (
        <div className="map-container">      
          <label className="year" htmlFor="year">Year</label>
              <select className="years" onChange={this.handleYearChange} value={this.state.filterYear}>
                <option value={'all'} default>All Years</option>
                <option value={2016}>2016</option>
                <option value={2015}>2015</option>
                <option value={2014}>2014</option>
                <option value={2013}>2013</option>
                <option value={2012}>2012</option>
                <option value={2011}>2011</option>
                <option value={2010}>2010</option>
                <option value={2009}>2009</option>
                <option value={2008}>2008</option>
                <option value={2007}>2007</option>
                <option value={2006}>2006</option>
                <option value={2005}>2005</option>
                <option value={2004}>2004</option>
                <option value={2003}>2003</option>
                <option value={2002}>2002</option>
              </select>
        </div>

		)
	},

    handleYearChange : function (e) {
      // console.log('you changed: ' + e.target.value);
      this.setState({filterYear: e.target.value});
      console.log(e.target.value);
    },
});

module.exports = YearFilter;


