import React from 'react';

import MenuStore from '../store/MenuStore';
import Title from './Title';

const Home = () => {
	return (
		<div className="Home">
			<Title/>
			<div className="Home__subtitle mt2 tc f3">The Ultimate Musical Challenge</div>
			<ul className="list pl0 tc">
				<li className="pa2 f4 grow hover--2" onClick={ () => { MenuStore.currentMenu = "play" }}>Play</li>
				<li className="pa2 f4 grow hover--2" onClick={ () => { MenuStore.currentMenu = "options" }}>Options</li>
				<li className="pa2 f4 grow hover--2" onClick={ () => { MenuStore.currentMenu = "scores" }}>Scores</li>
				<li className="pa2 f4 grow hover--2" onClick={ () => { MenuStore.currentMenu = "statistics" }}>Statistics</li>
				<li className="pa2 f4 grow hover--2" onClick={ () => { MenuStore.currentMenu = "about" }}>About</li>
			</ul>
		</div>
	);
}

export default Home;
