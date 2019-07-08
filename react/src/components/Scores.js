import React, { Component } from 'react';

import BackButton from './BackButton';
import scoreStore from '../store/ScoreStore';

import Score from './Score';

class Scores extends Component {

	renderScores(){
			let scoreArray = [];
			for (let i = 0; i < scoreStore.scores.length; i++) {
				const {name, date, score} = scoreStore.scores[i];
				let className = "";
				if (i % 2 === 1)
					className = "bg-color--4";
				scoreArray.push(<Score key={i} class={className} name={name} date={date} score={score}/>);
			}
			return scoreArray;
	}

	render(){
		return(
			<div className="Scores" style={{width: '320px'}}>
				<div className="Scores__title tc f2 b mt5 pr4">Scores</div>
				<div style={{overflowY: 'scroll', height: '375px', paddingRight: '20px'}}>
				<div className='Scores__header'>
					<div className="Scores__name fl w-third pa2 b f3 tc">Name</div>
					<div className="Score__date fl w-third pa2 b f3 tc">Date</div>
					<div className="Score__score fl w-third pa2 b f3 tc">Score</div>
					<div className="clear"></div>
				</div>
						{ this.renderScores() }
				</div>
				<BackButton/>
			</div>
		);
	}
}

export default Scores;
