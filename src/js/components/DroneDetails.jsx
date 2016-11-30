var React = require('react');

var DroneDetails = React.createClass({

    render: function () {
        return (
            <div>
                <p>{this.props.data.narrative}</p>
            </div>
        );
    }

});

module.exports = DroneDetails;