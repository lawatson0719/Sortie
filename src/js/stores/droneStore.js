var EventEmitter = require('eventemitter3');
var $ = require('jquery');

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

	$.ajax(options);

	return data;
};

window.droneStore = droneStore;

module.exports = droneStore;