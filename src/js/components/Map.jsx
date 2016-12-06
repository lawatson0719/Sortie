var React = require('react');

// var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')

var Link = require('react-router').Link;
// var Stats = require('./Stats.jsx');
// var DroneList = require('./DroneList.jsx')
// var DroneDetails = require('./DroneDetails.jsx')

// var MapView = require('./MapView.jsx');
var DetailsView = require('./DetailsView.jsx');
var GrandTotals = require('./GrandTotals.jsx');



function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var Map = React.createClass({
    render: function () {
            
        return (
            <div>

            </div>
        )




    }
}) 

module.exports = Map;

