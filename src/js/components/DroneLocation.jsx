var React = require('react');

var DroneLocation = React.createClass({

    render: function () {
        return (
            <div>
                <p>{this.props.data.location}, {this.props.data.country}</p>
            </div>
        );
    }

});

module.exports = DroneLocation;