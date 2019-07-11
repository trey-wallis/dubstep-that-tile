import React, { Component } from 'react';

import { observer } from 'mobx-react';

import BackButton from './BackButton';
import ScoreStore from '../store/ScoreStore';

import Score from './Score';

class Scores extends Component {

	componentDidMount(){
			ScoreStore.fetchScores();
	}

	renderScores(){
			let scoreArray = [];
			for (let i = 0; i < ScoreStore.scores.length; i++) {
				const { username, date, time } = ScoreStore.scores[i];
				let className = "";
				if (i % 2 === 1)
					className = "bg-color--4";
				scoreArray.push(<Score key={i} class={className} name={username} date={date} time={time}/>);
			}
			return scoreArray;
	}

	render(){
		return(
			<div className="Scores" style={{width: '320px'}}>
				<div className="Scores__title tc f2 b mt5 pr3">Scores</div>
				<div style={{overflowY: 'scroll', height: '325px', paddingRight: '20px'}}>
					<div className='Scores__header'>
						<div className="Scores__name fl w-third pa2 b f3 tc">Date</div>
						<div className="Score__date fl w-third pa2 b f3 tc">Name</div>
						<div className="Score__time fl w-third pa2 b f3 tc">Time</div>
						<div className="clear"></div>
					</div>
					{ this.renderScores() }
				</div>
				<div className="Scores__options pr4">
					<div className="Scores__ten fl w-third pa2 f3 tr" onClick={ () => { ScoreStore.fetchScores(10) }}>10</div>
					<div className="Score__fifty fl w-third pa2 f3 tc" onClick={ () => { ScoreStore.fetchScores(50) }}>50</div>
					<div className="Score__thousand fl w-third pa2 f3 tl" onClick={ () => { ScoreStore.fetchScores(1000) }}>1000</div>
					<div className="clear"></div>
					<BackButton/>
				</div>
			</div>
		);
	}
}

export default observer(Scores);
