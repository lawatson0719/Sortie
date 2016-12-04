var React = require('react');

var $ = require('jquery');

var Graph = React.createClass({

    render: function () {
        return (
            <section class="graph">
                <div class="charts--container">
                  <ul>
                    <li>
                      <div id="pieChart">
                      
                          <div id="lineChart">
                            <svg id="lineChartSVG" class="lineChart--svg">
                              <defs>
                                <linearGradient id="lineChart--gradientBackgroundArea" x1="0" x2="0" y1="0" y2="1">
                                  <stop class="lineChart--gradientBackgroundArea--top" offset="0%" />
                                  <stop class="lineChart--gradientBackgroundArea--bottom" offset="100%" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>

                      </div>
                    </li>
                  </ul>
                </div>
            </section>    
        );
    },

});

module.exports = Graph;
