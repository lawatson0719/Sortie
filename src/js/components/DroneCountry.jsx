var React = require('react');

var DroneCountry = React.createClass({

    render: function () {
        return (
            <div>
                <p>{this.props.data.country}</p>
            </div>
        );
    }

});

module.exports = DroneCountry;