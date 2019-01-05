import React from 'react';
import { autorun, observable, decorate, computed } from "mobx";

class UIStore {

	constructor(){
		this.route = "title";
	}

	setRoute(route){
		this.route = route;
	}
}

decorate(UIStore, {
	route: observable,
})

const ui = window.ui = new UIStore();

export default ui;

autorun(()=>{
	console.log("UI", "Route", ui.route);
})