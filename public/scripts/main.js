// import $ from 'jquery';
// import Backbone from 'backbone';
// Backbone.sync = sync;
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import App from './components/App.js';
import AddProduct from './components/AddProduct.js';
// import NewProduct from './components/NewProduct.js';
import ViewPage from './components/ViewPage.js';
import $ from 'jquery';
// import Nav from './components/Navigation.js';

$.ajaxSetup({
	headers: {
		Accept: 'application/json'
	}
});

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="viewPage" component={ViewPage}/>
			<Route path="/addProduct" component={AddProduct}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<IndexRoute component={Home}/>
		</Route>
	</Router>
);

// ReactDOM.render(Nav, document.getElementById('nav'));
ReactDOM.render(router, document.getElementById('main'));
