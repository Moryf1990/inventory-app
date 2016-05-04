// import $ from 'jquery';
// import Backbone from 'backbone';
// Backbone.sync = sync;
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
// import Nav from './components/Navigation.js';

const router = (
	<Router history={browserHistory}>
			<Route path="/" component={Home}/>
			<Route path="/register" component={Register}/>
			<Route path="/login" component={Login}/>
	</Router>
);

// ReactDOM.render(Nav, document.getElementById('nav'));
ReactDOM.render(router, document.getElementById('main'));
