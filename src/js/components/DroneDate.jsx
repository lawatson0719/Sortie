var React = require('react');

var DroneDate = React.createClass({

    render: function () {

	var timeStamp = this.props.data.date

    var dateSansTimeStamp = timeStamp.slice(0, timeStamp.length -14);

        return (
            <div>
                <p>Date: {dateSansTimeStamp}</p>
            </div>
        );
    }

});

module.exports = DroneDate;