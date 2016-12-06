var React = require('react');
var ReactDOM = require('react-dom');

var droneStore = require('../stores/droneStore.js');
var Casualties= require('./Casualties.jsx');

var Details = React.createClass ({

	render: function () {
		return (
			<div>
				<section className="description cf" id="non-totals">
                      <div className="details">
                        <p className="dets">dets</p>
                      </div>
                </section>

			</div>
		)
	}

})

module.exports = Details;