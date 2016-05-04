// import $ from 'jquery';
// import Backbone from 'backbone';
// Backbone.sync = sync;
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import LoginHome from './components/LoginHome.js';
// import Nav from './components/Navigation.js';

const router = (
	<Router history={browserHistory}>
		<Route path="/loginHome" component={LoginHome}/>
		<Route path="/login" component={Login}/>
		<Route path="/register" component={Register}/>
		<Route path="/" component={Home}/>
	</Router>
);

// ReactDOM.render(Nav, document.getElementById('nav'));
ReactDOM.render(router, document.getElementById('main'));
