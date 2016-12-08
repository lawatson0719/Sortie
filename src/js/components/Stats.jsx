var React = require('react');

var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')

var Link = require('react-router').Link;

var TotalsView = require('./TotalsView.jsx');
var CivilianTotalsView = require ('./CivilianTotalsView.jsx');
var GrandTotals = require('./GrandTotals.jsx');
var ShortSummary = require('./ShortSummary.jsx');
var StatsFilter = require('./StatsFilter.jsx');
var Graph = require('./Graph.jsx');
var droneStore = require('../stores/droneStore.js');
var Casualties = require('./Casualties.jsx');

function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var Stats = React.createClass({

	getInitialState: function () {

		return {
			drones: droneStore.getDroneStrikes(),
			
			
			currentStrike: null

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

	handleYearChange : function ( e ) {

	  // this.setState({ year : val } );

	  this.setState( { year : e.target.value } );
	  
	  console.log(this.state.year);

	  // console.log( "val", val );
	},

	render: function () {

		var data = this.state.data;
		var year = this.state.year;

			
		return (
			<div>
				<header>
					<div className="logo-container">
						<img className="logo" src="assets/images/whitelogo.png"/>
					</div>
					<nav>
					  <Link to="/" className={getActiveClass('/')}>MAP</Link>
					</nav>
				</header>
				<main className="cf">
					<Graph year={year} data={data} onMarkerClick={this.setDetails} onChange={this.props.handleFilter} />
					<div className="filter-container">
						<label className="year" htmlFor="year">Year</label>
						<select className="filters increment" onChange={this.handleYearChange} value={this.state.year}>
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
					
					<Casualties strike={this.state.strike} />
					
						
				</main>
				<footer>
				  <small>&copy; 2016 Sortie All Rights Reserved</small>
				</footer>
			</div>

		)
	},

	setDetails: function (strike) {
	  this.setState({
		strike: strike
	  });
	},

	handleFilter: function (array) { 
		this.setState({ 
		  filteredArray: array 
		});
	}
})

module.exports = Stats;

