import React from 'react';

import BackButton from './BackButton';
import LevelStore from '../store/LevelStore';

const Statistics = () => {
	return(
		<div className="Statistics flex flex-column justify-center">
			<div className="Statistics__title tc f2-ns f3 b mt5">Statistics</div>
				<div className="Statistics__stats flex justify-between">
				<ul className="Statistics__label list p01 dib list--ml0">
					<li className="f4 mb2">Total Tiles Traversed</li>
					<li className="f4 mb2">Black Tiles Traversed</li>
					<li className="f4 mb2">White Tiles Tapped</li>
					<li className="f4 mb2">Games Played</li>
					<li className="f4 mb2">Games Completed</li>
				</ul>
				<ul className="Statistics__stat list p01 dib ml4 tr">
					<li className="f4 b mb2">{LevelStore.totalTiles}</li>
					<li className="f4 b mb2">{LevelStore.blackTiles}</li>
					<li className="f4 b mb2">{LevelStore.whiteTiles}</li>
					<li className="f4 b mb2">{LevelStore.totalPlayedGames}</li>
					<li className="f4 b mb2">{LevelStore.totalCompletedGames}</li>
				</ul>
			</div>
			<BackButton style={{marginTop: '6.5rem'}}/>
		</div>
	);
}

export default Statistics;
