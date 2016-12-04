var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

// {Router, Route, hashHistory } = require('react-router') // DESTRUCTURING 

var Router = ReactRouter.Router; // Root Component
var Route = ReactRouter.Route; 
var IndexRoute = ReactRouter.IndexRoute; // Does not take a path
var hashHistory = ReactRouter.hashHistory;

var AppHome = require('./components/AppHome.jsx');
var AppStats = require('./components/AppStats.jsx');



var jsx = (
	<Router history={hashHistory}>
		<Route path="/" component={AppHome}></Route>
		<Route path="/stats" component={AppStats}></Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));