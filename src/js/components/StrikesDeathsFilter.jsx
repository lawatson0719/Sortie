var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');

var StrikesDeathsFilter = React.createClass ({


	render: function () {
		
 
		return (
				
			<select className="filters type">
				<option value="Strikes">Strikes</option>
				<option value="Deaths">Deaths</option>
			</select>
					
		)
	}

})

module.exports = StrikesDeathsFilter;