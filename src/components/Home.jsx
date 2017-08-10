var React = require('react');
var ProfilePic = require('../assets/me2.jpg');
//import Img from 'react-image';

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<h1>This is the Home Page</h1>
				<img src={require("../assets/me2.jpg")}/>
				<p>This is me. I am just putting some placeholder text here. </p>
				<p>Eventually this should contain an overview of the site</p>
			</div>
		)
	}
});

module.exports = Home;
