import React, { Component } from 'react';

class Score extends Component {

	render(){
		const {ui} = this.props;
		
		return(
		<div className="Score">
			{ ui.backButton }
		</div>
		);
	}
}

export default Score;