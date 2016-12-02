var React = require('react');

var $ = require('jquery');

var Overlay = React.createClass({

    render: function () {
        return (
            <div id="overlay-preload">
                <span>Every disclosed covert U.S. drone strike from 2002 to present</span>
            </div>

        );
    },

    componentDidMount: function() {
		$('#overlay-preload').delay(2800).fadeOut('slow')
	}

});

module.exports = Overlay;
