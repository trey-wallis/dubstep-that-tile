import React, { Component } from 'react';

class Score extends Component {

	render(){
		const {ui, level} = this.props;
		
		return(
		<div className="Score">
			{ ui.loginHeader }
			<div className="Scores__title tc f2-ns f3 b mt5">Scores</div>
			<table>
				<tr class="tc">
					<th class="f3 w33">Tiles</th>
					<th class="f3 w33">Tiles/Sec</th>
					<th class="f3 w33">Time</th>
				</tr>
			</table>
			<div class="mh400px y-auto">
				<table class="w-100">
					{ level.displayScores }
				</table>
			</div>
			{ ui.backButton }
		</div>
		);
	}
}

export default Score;