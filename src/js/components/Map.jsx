var React = require('react');

// var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')


var Link = require('react-router').Link;
// var Stats = require('./Stats.jsx');
// var DroneList = require('./DroneList.jsx')
// var DroneDetails = require('./DroneDetails.jsx')

// var MapView = require('./MapView.jsx');
var Details = require('./Details.jsx');
var Casualties = require('./Casualties.jsx');
var MapFilter = require('./MapFilter.jsx');



function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var Map = React.createClass({
    render: function () {
            
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
                      
                  </section>
                  <MapFilter />
                  <Casualties />
                  
                </main>
                <footer>

                  <small>&copy 2016 Drone Strike All Rights Reserved</small>
                </footer> 
                  
                { 
                
              }

            </div>
        )




    }
}) 

module.exports = Map;

