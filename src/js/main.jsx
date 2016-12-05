var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

// {Router, Route, hashHistory } = require('react-router') // DESTRUCTURING 

var Router = ReactRouter.Router; // Root Component
var Route = ReactRouter.Route; 
var IndexRoute = ReactRouter.IndexRoute; // Does not take a path
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App.jsx');
var Map= require('./components/Map.jsx')
var Stats = require('./components/Stats.jsx');



var jsx = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Map} />
		<Route path="/stats" component={Stats}/>
		</Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));