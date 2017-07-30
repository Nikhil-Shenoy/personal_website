// Basic requires
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Require custom components here


require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
		<Route>
	</Router>,
	document.getElementById('app')
);
		
