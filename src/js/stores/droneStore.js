var EventEmitter = require('eventemitter3');
var $ = require('jquery');
// var overlay = require('../components.Overlay.jsx')

var droneStore = Object.create(EventEmitter.prototype);
EventEmitter.call(droneStore);

// Collection
var data = [];

droneStore.getDroneStrikes = function () {
    return data;
};

droneStore.fetchDroneStrikes = function () {
    var options = {
        dataType: 'jsonp',
        url: 'http://api.dronestre.am/data',
        success: function (response) {
            data = response.strike;
            droneStore.emit('update');
        }
    };

    return $.ajax(options);

    
};

// overlay.componentDidMount = function() {
//         $('#overlay-preload').delay(1700).fadeOut('slow')
// };

window.droneStore = droneStore;

module.exports = droneStore;