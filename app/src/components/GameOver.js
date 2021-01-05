import React from 'react';

import Title from './Title';
import BackButton from './BackButton';
import LevelStore from '../store/LevelStore';
import TimerStore from '../store/TimerStore';

const GameOver = () => {
		return (
			<div className="GameOver">
				<Title/>
				{
					!LevelStore.won ?
						(<div className="GameOver__text">
							<div className="GameOver__first mt5 tc f3-ns f4 b">Failure<br/> Better luck next time</div>
							<div className="GameOver__score mt3 tc f4-ns f5">
								You survived { TimerStore.elapsed }s <br/>
								and traversed { LevelStore.tileOffsetY } tile{ LevelStore.tileOffsetY === 1 ? "" : "s" }
							</div>
						</div>)
					:(<div className="GameOver__text">
							<div className="GameOver__first mt5 tc f3-ns f4">Congrats</div>
							<div className="GameOver__second mt3 tc f2-ns f3 b">{ TimerStore.elapsed }s</div>
							<div className="GameOver__third tc f3-ns f4 b">
								{ LevelStore.tilesPerSecond } tiles per second <br/>
								{ LevelStore.tileOffsetY } tile{ LevelStore.tileOffsetY === 1 ? "" : "s" } traversed
							</div>
					  </div>)
				}
				<BackButton retry={true} style={{marginTop: '2rem'}}/>
				<BackButton style={{marginTop: '0.5rem'}}/>
			</div>
	);
}

export default GameOver;
