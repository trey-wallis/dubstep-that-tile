import React from 'react';
import Register from './react/menu/Register';
import Login from './react/menu/Login';
import Title from './react/menu/Title';

import { observable, decorate, action, computed, autorun} from "mobx"
import {configure} from "mobx"
configure({enforceActions: true})

class UIStore {

	constructor(){
		        autorun(() => alert("hello"));
		/*
		* Menu Settings
		*/
		this.route = "title";
	}

	/*
	* Menu API
	*/
	setRoute(route){
		this.route = route;
	}

	getMenu(){
		switch(this.route){
			case "register":
				return <Register />
			case "login":
				return <Login />
			default:
				return <Title />
		}
	}
}

decorate(UIStore, {
	route: observable,
	setRoute: action
})

export default UIStore;