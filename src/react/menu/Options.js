import React, { Component } from 'react';

class Options extends Component {

	render(){
		const {ui, domain} = this.props;
		
		return(
		<div className="Options h-100 relative flex justify-center">
			<ul id="options-list">
				<li className="mode-select selection">Mode:
					<select id="mode" name="Mode" onChange={ () => {
							var value = document.getElementById("mode").value;
							value != "inf"?
								window.level.setMultiplier(parseInt(value))
								:window.level.setMultiplier(Infinity);
							window.level.resetGame();
						} }>
						<option value="1">50</option>
						<option value="2">100</option>
						<option value="4">200</option>
						<option value="20">1000</option>
						<option value="100">Infinite (5000)</option>
					</select>
				</li>
				<li className="mode-select description">This is how many tiles you will have to traverse to reach the end</li>
			</ul>
			<button className="absolute bottom-2 bg-color--empty outline--none bw0 dim f3" onClick={ () => {ui.setRoute("title")} } >Back</button>
		</div>
		);
	}
}

export default Options;
