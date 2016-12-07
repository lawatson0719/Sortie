var React = require('react');

var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')

var Link = require('react-router').Link;

var GrandTotals = require('./GrandTotals.jsx');
var ShortSummary = require('./ShortSummary.jsx');
var StatsFilter = require('./StatsFilter.jsx');
var Graph = require('./Graph.jsx');
var droneStore = require('../stores/droneStore.js')

function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var Stats = React.createClass({

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

    render: function () {
            
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
	            	<Graph />
		    		<StatsFilter />
		        	<ShortSummary />
		        	<GrandTotals />	
	            </main>
	            <footer>
	              <small>&copy 2016 Drone Strike All Rights Reserved</small>
	            </footer>
	        </div>

        )
    }
})

module.exports = Stats;

