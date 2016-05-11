import React from 'react';
import Nav from './Navigation.js';

export default React.createClass({
	render: function() {
		return (
			<div>
				<Nav />
				{this.props.children}
			</div>
		);
	}
});