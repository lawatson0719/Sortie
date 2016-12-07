var React = require('react');

var DroneMap = require('./DroneMap.jsx')
var Overlay = require('./Overlay.jsx')
var droneStore = require('../stores/droneStore.js')


var Link = require('react-router').Link;
// var Stats = require('./Stats.jsx');
// var DroneList = require('./DroneList.jsx')
// var DroneDetails = require('./DroneDetails.jsx')

// var MapView = require('./MapView.jsx');
var Details = require('./Details.jsx');
var Casualties = require('./Casualties.jsx');
var YearFilter = require('./YearFilter.jsx');
var GrandTotals = require('./GrandTotals.jsx');


function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var Map = React.createClass({
    getInitialState : function () {
      return {
        data: droneStore.getDroneStrikes(),
        currentStrike: null,
        year: "all",
        country: "all"
      };
    },

    componentDidMount : function () {
      var _this = this;

      // console.log( "mounting" );
      var response = droneStore.fetchDroneStrikes();

      response.done( function( msg ){

        _this.setState({
          data: msg.strike
        });
      } );
    },

    handleYearChange : function ( e ) {

      // this.setState({ year : val } );

      this.setState( { year : e.target.value } );
      
      // console.log(e.target.value);

      // console.log( "val", val );
    },

    // handleCountryChange : function (e) {
    //   // console.log('you changed: ' + e.target.value);
    //   this.setState({filterCountry: e.target.value});
    //   console.log(e.target.value);
    // },

    clearMap : function () {

      // console.log( "test" );
      this.refs.mapref.clearMap();
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
                        <Link to="stats" className={getActiveClass('stats')}>STATS</Link>
                    </nav>
                </header>

                <main className="cf">
                  <section className="map">
                      <DroneMap year={year} data={data} onMarkerClick={this.setDetails} ref="mapref" onChange={this.props.handleFilter}/>
                  </section>

                  <form className="cf hidden">
                    <div className="map-container">      
                        <label className="year" htmlFor="year">Select a Year</label>
                        <select className="years" onChange={this.handleYearChange} value={this.state.year}>
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
                </form>

               
                  <Casualties strike={this.state.strike} />
                  
                  
                </main>
                <footer>

                  <small>&copy; 2016 Sortie All Rights Reserved</small>
                </footer> 
                  
                { 
                
              }

            </div>
        );
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

module.exports = Map;
