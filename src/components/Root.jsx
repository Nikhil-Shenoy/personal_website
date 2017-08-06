var React = require('react');
var TopBar = require('TopBar');

var Root = React.createClass({
	render: function() {
		return (
			<div>
				<TopBar/>
				<div className="row">
					<div className="columns medium-6 large-4 small-centered">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Root;