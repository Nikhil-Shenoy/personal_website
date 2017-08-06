// Basic requires
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Require custom components here
var Root = require('Root');
var Home = require('Home');
var About = require('About');
var Blog = require('Blog');



require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Root}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About}/>
			<Route path="blog" component={Blog}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
		
