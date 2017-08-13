var React = require('react');
var ProfilePic = require('../assets/me.jpg');
var TopBar = require('TopBar');

import styled from 'styled-components';
//import Img from 'react-image';

// @todo: Find out how to make this a styled component
var pro_pic_styles = {
	'width': '450px',
	'height': '450px',
	'borderRadius': '8px',
	'margin': '0 auto',
	// 'padding': '20px'
}

const Title = styled.h1`
	text-align: center;
	padding: 20px;
`;


// Styling is a pain in the ass

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Title>Nikhil Shenoy</Title>
				<div style={{"textAlign": "center" }}>
					<img style={pro_pic_styles} src={ProfilePic}/>
				</div>
				<p style={{ "textAlign": "center", "padding": "30px" }}>
					I am an engineer, and I'm always looking to learn new things. 
				</p>
			</div>
		)
	}
});
				// <p style={{ p_styles }}>Eventually this should contain an overview of the site</p>
				// <TopBar/>

module.exports = Home;
