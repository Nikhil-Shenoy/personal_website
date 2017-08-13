var React = require('react');
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github'
import MdEmail from 'react-icons/lib/md/email'



var Footer = React.createClass({
	render: function() {
		return (
			<div>
				<a href="www.facebook.com">
					<FaFacebookOfficial size="36"/>
				</a>
				<a href="www.linkedin.com">
					<FaLinkedinSquare/>
				</a>
				<a href="www.github.com">
					<FaGithub/>
				</a>
				<a href="www.gmail.com">
					<MdEmail/>
				</a>
			</div>

		)
	}

});

module.exports = Footer;