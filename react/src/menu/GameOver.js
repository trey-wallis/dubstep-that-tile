import React, { Component } from 'react';

class GameOver extends Component {

	render(){
		const {ui, level} = this.props;
		
		return(
		<div className="GameOver">
			{ ui.loginHeader }
			{ ui.title }
			{
				!level.wonGame?
					(<div className="GameOver__text">
						<div className="GameOver__first mt5 tc f3-ns f4 b">Failure<br/> Better luck next time</div>
						<div className="GameOver__score mt3 tc f4-ns f5">
							You survived {level.lastTime}s <br/>
							and traversed {level.traversed} tile{level.traversed===1?"":"s"}
						</div>
					</div>)
				:(<div className="GameOver__text">
					<div className="GameOver__first mt5 tc f3-ns f4">Congrats</div>
					<div className="GameOver__second mt3 tc f2-ns f3 b">{level.lastTime}s</div>
					<div className="GameOver__third tc f3-ns f4 b">
						{level.tilesPerSecond} tiles per second <br/>
						{level.traversed} tile{level.traversed===1?"":"s"} traversed
					</div>
				  </div>)
			}
			{ ui.retryButton }
			{ ui.backButton }
		</div>
		);
	}
}

export default GameOver;