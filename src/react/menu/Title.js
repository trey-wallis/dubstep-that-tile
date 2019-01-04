import React, { Component } from 'react';
import './custom.css';

class Title extends Component {

	render(){
		const {ui, domain} = this.props;

		return (
		<div className="Title">
			<header className="Title__header pr2 mb4 tr">
				<button className="p2 mr1 dim bw0 f4 bg-color--empty outline--none" onClick={ () => {ui.setRoute("login")} }>Login</button>
				<button className="p2 dim f4 bw0 bg-color--empty outline--none" onClick={ () => {ui.setRoute("register")} }>Register</button>
			</header>
			<div className="Title__title tc f1 fw6">Dubstep That Tile</div>
			<div className="Title__subtitle pt2 tc f2 fw3">The Ultimate Musical Challenge</div>
			<ul className="list pl0 tc">
				<li className="pa3 f3 grow hover--2" onClick={ () => {ui.setRoute("play")} }>Play</li>
				<li className="pa3 f3 grow hover--2" onClick={ () => {ui.setRoute("options")} }>Options</li>
				<li className="pa3 f3 grow hover--2" onClick={ () => {ui.setRoute("scores")} }>Scores</li>
				<li className="pa3 f3 grow hover--2" onClick={ () => {ui.setRoute("statistics")} }>Statistics</li>
				<li className="pa3 f3 grow hover--2" onClick={ () => {ui.setRoute("about")} }>About</li>
			</ul>
		</div>
		);
	}
}

export default Title;