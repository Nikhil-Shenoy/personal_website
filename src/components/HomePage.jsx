var React = require('react');


var HomePage = React.createClass({
	render: function() {
		return (
			<div>
				<ul className="menu">
				  <li><a href="#">One</a></li>
				  <li><a href="#">Two</a></li>
				  <li><a href="#">Three</a></li>
				  <li><a href="#">Four</a></li>
				</ul>
			</div>
		)
	}
});

module.exports = HomePage;