var React = require('react');
var ReactDOM = require('react-dom');

var DroneList = require('./DroneList.jsx')
var DroneListItem = require('./DroneListItem.jsx')

var DroneMap = require('./DroneMap.jsx')
var DroneDetails = require('./DroneDetails.jsx')
var Overlay = require('./Overlay.jsx')

var Link = require('react-router').Link;
var Stats = require('./Stats.jsx');
var droneStore = require('../stores/droneStore');


function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var Map = React.createClass({

    // componentWillMount: function () {
    //   var _this = this;
      
    //   droneStore.on('update', function () {
    //     _this.setState({
    //       data: droneStore.getDroneStrikes()
    //     })
    //   })
    // },
    getInitialState : function () {
    return {
      droneObj: '',
      data: droneStore.getDroneStrikes()
    };
  },

  componentDidMount : function () {
    var _this = this;

    // console.log( "mounting" );
    var response = droneStore.fetchDroneStrikes();

    response.done( function( msg ){

      console.log( "msg: ", msg );

      _this.setState({
        data: msg.strike
      });
    } );

    response.fail( function( msg ){

      console.log( "shit broke" );
    } );

    // console.log( "strikes", strikes );
  },
  
    render: function () {

      var data = this.state.data;

      // console.log( "data: ", data );

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
              <div>
                  <section className="map">
                    <DroneMap data={data}/>
                  </section>
                  <form className="cf hidden">
                    <div className="map-container">
                      <label className="country" htmlFor="country">Country</label>
                      <select className="countries">
                        <option value="pakistan">Pakistan</option>
                        <option value="yemen">Yemen</option>
                        <option value="somalia">Somalia</option>
                      </select>
                    </div>
                    <div className="map-container">
                      <label className="year" htmlFor="year">Year</label>
                      <select className="years">
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
                  <section className="description cf" id="non-totals">
                    <div className="details">
                      <p className="dets"></p>
                    </div>
                    <div className="box">
                      <h2>Casualties</h2>
                      <div id="totals" className="casualties">
                        <h4>Civilian</h4>
                        <div></div>
                      </div>
                      <div id="civilian" className="casualties">
                        <h4>Total</h4>
                        <div>0</div>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
          </div>
      )




    }
})

module.exports = Map;



