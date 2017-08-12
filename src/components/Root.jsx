var React = require('react');
var TopBar = require('TopBar');

var Root = React.createClass({
	render: function() {
		return (
			<div>
				<TopBar/>
				<div className="grid-x">
					<div className="small-6 small-offset-3c ell">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Root;