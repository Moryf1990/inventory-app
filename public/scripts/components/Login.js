import React from 'react';
import Nav from './Navigation.js';

export default React.createClass({
	render: function() {
		return (
			<section className="login">
				<Nav/>
				<h1>Login</h1>
			</section>
		);
	}
});