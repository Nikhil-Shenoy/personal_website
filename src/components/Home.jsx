var React = require('react');
var ProfilePic = require('../assets/me.jpg');
var TopBar = require('TopBar');

import styled from 'styled-components';
//import Img from 'react-image';

// @todo: Find out how to make this a styled component
var pro_pic_styles = {
	'width': '150px',
	'height': '150px',
	'border-radius': '8px',
	'align': 'center'
}

const Title = styled.h1`
	text-align: center;
	color: palevioletred;
`;

				// <h1>This is the Home Page</h1>
var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Title>This is the Home Page</Title>
				<img style={pro_pic_styles} src={ProfilePic}/>
				<p>This is me. I am just putting some placeholder text here. </p>
				<p>Eventually this should contain an overview of the site</p>
			</div>
		)
	}
});
				// <TopBar/>

module.exports = Home;
