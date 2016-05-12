import React from 'react';
import {Link} from 'react-router';
import user from '../models/UserModel.js';

const Nav = React.createClass({
	componentWillMount: function() {
		// console.log('nav compnent will mount, window user', window.user);
		// user.on('change', () => {
		// 	if(user.get('id')) {
		// 		this.setState({loggedIn: true});
		// 	}
		// 	else {
		// 		this.setState({loggedIn: false});
		// 	}
		// });
		// user.set(window.user);

		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},
	getInitialState: function() {
		return {
			loggedIn: false,
			user: user
		};
	},
	render: function() {
		var links = [];
		if(user.get('id')) {
			links.push(<Link className="navLink" to="/viewPage">ViewPage</Link>);
			links.push(<Link className="navLink" to="/addProduct">AddProduct</Link>);
			links.push(<Link className="navLink" to="/">Home</Link>);
			links.push(<a className="navLink" href="/auth/logout">Logout</a>);
		}
		else {
			links.push(<Link className="navLink" to="/register">Register</Link>);
			links.push(<Link className="navLink" to="/login">Login</Link>);
			links.push(<Link className="navLink" to="/">Home</Link>);
		}
		return (
			<div>
				{links}
			</div>
		);
	}
});

export default Nav;