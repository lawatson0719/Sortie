var React = require('react');

var DroneList = require('./DroneList.jsx')
var Overlay = require('./Overlay.jsx')

var Link = require('react-router').Link;


function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var Stats = React.createClass({
    render: function () {
            
        return (
            <div>
                <header>
                    <div className="logo-container">
                        <img className="logo" src="assets/images/whitelogo.png"/>
                    </div>
                    <nav>
                      <Link to="/" className={getActiveClass('/')}>MAP</Link>
                    </nav>
                </header>
                <main className="cf">
                     <div>
				       <div className="graph">
				         <div className="charts--container">
				           <ul>
				             <li>
				               <div id="pieChart">
				                 <div id="lineChart">
				                   <svg id="lineChartSVG" className="lineChart--svg">
				                     <defs>
				                       <lineargradient id="lineChart--gradientBackgroundArea" x1={0} x2={0} y1={0} y2={1}>
				                         <stop className="lineChart--gradientBackgroundArea--top" offset="0%" />
				                         <stop className="lineChart--gradientBackgroundArea--bottom" offset="100%" />
				                       </lineargradient>
				                     </defs>
				                   </svg>
				                 </div>
				               </div></li>
				           </ul>
				         </div>
				       </div>
				    <form className="cf stats">
				         <div className="filter-container">
				           <select className="filters numbers">
				             <option value="Average">Average</option>
				             <option value="Total">Total</option>
				           </select>
				         </div>
				         <div className="filter-container">
				           <select className="filters type">
				             <option value="Strikes">Strikes</option>
				             <option value="Deaths">Deaths</option>
				           </select>
				         </div>
				         <div className="filter-container">
				           <select className="filters increment">
				             <option value="Month">Month</option>
				             <option value="Year">Year</option>
				           </select>
				         </div>        
			       	</form>
			       	<div className="description">
			        	 <h2>SUMMARY</h2>
			         	<p className="default">Click data point on graph to show a brief summary
			           {/* description shown here when dot on graph is clicked */}
			        	</p>
			       </div>
			       <section>
			         	<h2>Casualties</h2>
			         	<div id="totals" className="casualties">
			           		<h4>Civilian</h4>
			           		<div>0</div>
			         	</div>
			         	<div id="civilian" className="casualties">
			           		<h4>Total</h4>
			           		<div>0</div>
			         	</div>
			       	</section>
			     	</div>                    
            </main>
                 <footer>
					<small>&copy 2016 Drone Strike All Rights Reserved</small>
				</footer>
            </div>
        )
    }
})

module.exports = Stats;

