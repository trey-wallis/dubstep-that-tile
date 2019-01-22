import React from 'react';
import { observable, decorate } from "mobx";

class UIStore {

	constructor(root){
		this.root = root;
		this.route = "title";
	}

	setRoute(route){
		this.route = route;
	}

	get title(){
		return (<div className="Title tc f1-ns f2 fw6 b">Dubstep That Tile</div>);
	}

	get loginHeader(){
		return(
			<header className="LoginHeader pr2 mb4 tr">
				<button className="p2 mr1 dim bw0 f4-ns f5 bg-color--none outline--none" onClick={ () => {this.root.ui.setRoute("login")} }>Login</button>
				<button className="p2 dim f4-ns f5 bw0 bg-color--none outline--none" onClick={ () => {this.root.ui.setRoute("register")} }>Register</button>
			</header>);
	}

	get backButton(){
		return(
			<div className="BackButton flex justify-center">
				<button className="mt5 bg-color--none outline--none bw0 dim f4-ns f5" onClick={ () => {this.root.ui.setRoute("title")} } >Back</button>
			</div>);
	}

	get retryButton(){
		return(
			<div className="RetryButton flex justify-center">
				<button className="mt5 bg-color--none outline--none bw0 dim f4-ns f5" onClick={ () => {this.root.ui.setRoute("play")} } >Retry</button>
			</div>);
	}
}

decorate(UIStore, {
	route: observable,
})

export default UIStore;