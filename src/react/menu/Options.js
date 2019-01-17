import React, { Component } from 'react';

class Options extends Component {

	render(){
		const {ui, domain, level} = this.props;

		return(
		<div className="Options">
			<div className="Options__title tc f2-ns f3 b mt5">Options</div>
			<ul className="f4 list mt3">
				<li className="mode-select tc">Mode
					<select id="mode" name="Mode" className="ml2 h2 bg-color--black-t1 bn outline--none tlc dropdown-none" onChange={ () => {
							let value = document.getElementById("mode").value;
							value != "inf"?
								level.setLevel(parseInt(value))
								:level.setLevel(Infinity);
						} }>
						{ level.modeSelect }
					</select>
				</li>
				<li className="mode-select color--1a f6 tc">This is how many tiles you will have to traverse to reach the end</li>
			</ul>
			{ui.backButton}
		</div>
		);
	}
}

export default Options;
