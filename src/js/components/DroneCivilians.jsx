var React = require('react');

var DroneCivilians = React.createClass({

    render: function () {
        return (
            <div>
                <p>Civilians: {this.props.data.civilians}</p>
            </div>
        );
    }

});

module.exports = DroneCivilians;