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
			<div className="Scores" style={{width: '50%'}}>
				<div className="Scores__title tc f2 b mt5">Scores</div>
				<div style={{overflowY: 'scroll', height: '375px', paddingRight: '20px'}}>
				<div className='Scores__header mt2 flex justify-between'>
					<div className="Scores__name f3 b">Name</div>
					<div className="Score__date f3 b">Date</div>
					<div className="Score__score f3 b">Score</div>
				</div>
						{ this.renderScores() }
				</div>
				<BackButton/>
			</div>
		);
	}
}

export default Scores;
