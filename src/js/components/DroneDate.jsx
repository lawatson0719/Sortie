var React = require('react');

var DroneDate = React.createClass({

    render: function () {
        return (
            <div>
                <p>Date: {this.props.data.date}</p>
            </div>
        );
    }

});

module.exports = DroneDate;