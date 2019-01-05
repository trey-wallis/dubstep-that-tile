import React, { Component } from 'react';

class About extends Component {

	render(){
		const {ui, domain} = this.props;
		
		return(
		<div className="About">
			{ ui.loginHeader }
			{ ui.title }
			<div className="About__instructions pa3">
				<div className="About__instructions-title tc b mb1 f4-ns f5">Instructions</div>
				<div className="About__instructions-body tc f5-ns f6">Navigate through 50 black tiles using ASDF without stepping on a white tile</div>
			</div>
			<div className="About__scoring pa3">
				<div className="About__scoring-title tc b mb1 f4-ns f5">Scoring</div>
				<div className="About__scoring-body tc f5-ns f6">Your score is determined by how fast you can traverse the tiles</div>
			</div>
			<div className="Copyright pa3">
				<div className="Copyright__name tc b mb1 f4-ns f5">Made by Trey Wallis</div>
				<div className="Version tc f5-ns f6">1.0.0</div>
			</div>
			{ ui.backButton }
		</div>
		);
	}
}

export default About;