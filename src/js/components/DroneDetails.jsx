var React = require('react');



var DroneDetails = React.createClass({

    render: function () {
        return (
            <div>
            	 <section className="description cf" id="non-totals">
                      <div className="details">
                        <p className="dets">{this.state.data.narrative}</p>
                      </div>
                      <div className="box">
                        <h2>Casualties</h2>
                        <div id="totals" className="casualties">
                          <h4>Civilian</h4>
                          <div>0</div>
                        </div>
                        <div id="civilian" className="casualties">
                          <h4>Total</h4>
                          <div>0</div>
                        </div>
                      </div>
                    </section>
            </div>
        );
    }

});

module.exports = DroneDetails;