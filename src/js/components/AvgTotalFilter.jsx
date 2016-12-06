var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var AvgTotalFilter = React.createClass ({


	render: function () {
		
		return ( 
           <select className="filters numbers">
             <option value="Average">Average</option>
             <option value="Total">Total</option>
           </select>     
		)
	}

})

module.exports = AvgTotalFilter;