import React from 'react';

import Title from './Title';
import BackButton from './BackButton';

const About = () => {
	return(
		<div className="About">
			<Title/>
			<div className="About__instructions pa3">
				<div className="About__instructions-title tc b mb1 f3">Instructions</div>
				<div className="About__instructions-body tc f4">Navigate through 50 black tiles using ASDF without stepping on a white tile</div>
			</div>
			<div className="About__scoring pa3">
				<div className="About__scoring-title tc b mb1 f3">Scoring</div>
				<div className="About__scoring-body tc f4">Your score is determined by how fast you can traverse the tiles</div>
			</div>
			<div className="About__copyright pa3">
				<div className="About__copyright-name tc b f4">Made by Trey Wallis
					<div className="f5 mt2">Contributions by James Reis</div>
				</div>
				<div className="About__version mt2 tc f5">Version 2.0.0</div>
			</div>
			<BackButton style={{marginTop: '2rem'}}/>
		</div>
	);
}

export default About;
