var React = require('react');
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github'
import MdEmail from 'react-icons/lib/md/email'

var icon_style = {
	'padding': '20px',
}

var Footer = React.createClass({
	render: function() {
		return (
			<div style={{ "textAlign": "center" }}>
				<a style={ icon_style } href="https://www.facebook.com/nikhil.shenoy.37" target="_blank"><FaFacebookOfficial size="36"/></a>
				<a style={ icon_style } href="https://www.linkedin.com/in/nikhil-shenoy-02059257/" target="_blank"><FaLinkedinSquare size="36"/></a>
				<a style={ icon_style } href="https://github.com/Nikhil-Shenoy" target="_blank"><FaGithub size="36"/></a>
				<a style={ icon_style } href="mailto:nikhilshenoy17@gmail.com"><MdEmail size="36"/></a>
			</div>

		)
	}

});

module.exports = Footer;