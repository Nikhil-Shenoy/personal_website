var React = require('react');
var TopBar = require('TopBar');
var Footer = require('Footer');

var Root = React.createClass({
	render: function() {
		return (
			<div>
				<div className="grid-x">
					<div className="small-6 small-offset-3 cell">
						<TopBar/>
						{this.props.children}
						<Footer/>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Root;