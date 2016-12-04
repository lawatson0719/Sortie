var React = require('react');

var DateTimeClock = React.createClass({
  
  showTime: function (date) {
	var formatted = date.toLocaleString()
	document.querySelector('#date').innerHTML = formatted;
}
})

module.exports = DateTimeClock;






