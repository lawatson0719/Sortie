var React = require('react');

var $ = require('jquery');
var Timestamp = require('react-timestamp');

var Overlay = React.createClass({


    render: function () {
        var dateStamp = <Timestamp format='date' includeDay/>
        // var timeStamp = <Timestamp format='time' />
        return (
            <div id="overlay-preload"> 
                    <div className="logolay">
                        <img className="logooverlay" src="assets/images/whitelogo.png"/>
                    </div>
                <span>All disclosed covert U.S. drone strikes from 2002 to {dateStamp}</span>
            </div>

        );
    },

    componentDidMount: function() {
		$('#overlay-preload').delay(2800).fadeOut('slow')
	}

});

module.exports = Overlay;
