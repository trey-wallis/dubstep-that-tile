import React, { Component } from 'react';

class Score extends Component {

	render(){
		const {ui, level} = this.props;
		
		return(
		<div className="Score">
			{ ui.loginHeader }
			<div className="Scores__title tc f2-ns f3 b mt5">Scores</div>
			<div class="mh400px y-auto">
				<table>
					{ level.displayScores }
				</table>
			</div>
			{ ui.backButton }
		</div>
		);
	}
}

export default Score;