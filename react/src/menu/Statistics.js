import React, { Component } from 'react';
import '../custom.css';

class Statistics extends Component {

	render(){
		const {ui, level} = this.props;
		
		return(
		<div className="Statistics">
			<div className="Statistics__title tc f2-ns f3 b mt5">Statistics</div>
			<ul className="Statistics__label list p01 dib list--ml0">
				<li className="f4-ns f5 mb2">Total Tiles Traversed</li>
				<li className="f4-ns f5 mb2">Black Tiles Traversed</li>
				<li className="f4-ns f5 mb2">White Tiles Tapped</li>
				<li className="f4-ns f5 mb2">Games Played</li>
				<li className="f4-ns f5 mb2">Games Completed</li>
			</ul>
			<ul className="Statistics__stat list p01 dib ml4">
				<li className="f4-ns f5 b mb2">{level.totalTiles}</li>
				<li className="f4-ns f5 b mb2">{level.totalBlackTiles}</li>
				<li className="f4-ns f5 b mb2">{level.totalWhiteTiles}</li>
				<li className="f4-ns f5 b mb2">{level.totalPlayedGames}</li>
				<li className="f4-ns f5 b mb2">{level.totalCompletedGames}</li>
			</ul>
			{ ui.backButton }
		</div>
		);
	}
}

export default Statistics;