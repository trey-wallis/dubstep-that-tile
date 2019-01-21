import React, { Component } from 'react';
import {observer} from 'mobx-react';

class Options extends Component {

	render(){
		const {ui, level} = this.props;

		return(
		<div className="Options">
			<div className="Options__title tc f2-ns f3 b mt5">Options</div>
			<ul className="f4 list mt3">
				<li className="Options__select tc">Tiles
					<select name="tile-select" className="ml2 h2 bg-color--black-t1 bn outline--none
					tlc dropdown-none" value={level.mode} onChange={ (e) => {
							level.mode = parseInt(e.target.value);
						} }>
						<option value="10">10</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="200">200</option>
						<option value="1000">1000</option>
						<option value="5000">Infinite (5000)</option>
					</select>
				</li>
				<li className="mode-select color--1a f6 tc">This is how many tiles you will have to traverse to reach the end</li>
			</ul>
			{ui.backButton}
		</div>
		);
	}
}

export default observer(Options);
