import React from 'react';
import Nav from './Navigation.js';

export default React.createClass({
	render: function() {
		return (
			<section className="home">
				<div className="homeNav">
					<Nav/>
					<h1>Home</h1>
				</div>
			</section>
		);
	}
});