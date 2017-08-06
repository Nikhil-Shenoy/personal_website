var React = require('react');
 var {Link} = require('react-router');

var TopBar = React.createClass({
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="dropdown menu" data-dropdown-menu>
						<li className="menu-text">Site Title</li>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/blog">Blog</Link>
					</ul>
				</div>
			</div>
		)
	}
});

module.exports = TopBar;
