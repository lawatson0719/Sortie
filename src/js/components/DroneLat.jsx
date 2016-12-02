var React = require('react');

var DroneLat = React.createClass({

    render: function () {
        return (
            <div>
                <p>{this.props.data.lat}</p>
            </div>
        );
    }

});

module.exports = DroneLat;