import React, { Component } from 'react';
import './custom.css';

class Title extends Component {

	render(){
		const {ui, domain} = this.props;

		return (
		<div className="Title">
			{ui.loginHeader}
			{ui.title}
			<div className="Title__subtitle pt2 tc f2-ns f3 fw3">The Ultimate Musical Challenge</div>
			<ul className="list pl0 tc">
				<li className="pa3-ns pa2 f3-ns f4 grow hover--2" onClick={ () => {ui.setRoute("play")} }>Play</li>
				<li className="pa3-ns pa2 f3-ns f4 grow hover--2" onClick={ () => {ui.setRoute("options")} }>Options</li>
				<li className="pa3-ns pa2 f3-ns f4 grow hover--2" onClick={ () => {ui.setRoute("scores")} }>Scores</li>
				<li className="pa3-ns pa2 f3-ns f4 grow hover--2" onClick={ () => {ui.setRoute("statistics")} }>Statistics</li>
				<li className="pa3-ns pa2 f3-ns f4 grow hover--2" onClick={ () => {ui.setRoute("about")} }>About</li>
			</ul>
		</div>
		);
	}
}

export default Title;