var React = require('react');

var DroneDeaths = React.createClass({

    render: function () {
        return (
            <div>
                <p>Deaths: {this.props.data.deaths}</p>
            </div>
        );
    }

});

module.exports = DroneDeaths;