// Basic requires
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Require custom components here
var HomePage = require('HomePage');

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={HomePage}></Route>
	</Router>,
	document.getElementById('app')
);
		
