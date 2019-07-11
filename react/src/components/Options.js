import React, { Component } from 'react';
import {observer} from 'mobx-react';

import BackButton from './BackButton';
import LevelStore from '../store/LevelStore';
import Storage from '../utility/Storage';

import '../css/Options.css';


class Options extends Component {

	handleUserChange(e){
		LevelStore.username = e.target.value
		Storage.saveUsernameToStorage(e.target.value);
	}

	render(){
		return (
			<div className="Options" style={{width: '320px'}}>
				<div className="Options__title tc f2 b mt5">Options</div>
				<ul className="f4 list mt3">
					<li className="Options__select tc">Tiles
						<select name="tile-select" className="ml2 h2 bg-color--black-t1 bn outline--none
						tlc dropdown-none" value={LevelStore.modeTiles} onChange={ (e) => {
								LevelStore.modeTiles = parseInt(e.target.value);
							} }>
							<option value="10">10</option>
							<option value="50">50</option>
							<option value="1000">1000</option>
						</select>
					</li>
					<li className="mode-select color--1a f6 tc">How many tiles you will have to traverse to reach the end</li>
				</ul>
				<div className="Options__username flex justify-center">
					Username <input type="text" className="Options__field-username ml2 bg-color--black-t1" placeholder="New User" defaultValue={ LevelStore.username } onChange={(e) => { this.handleUserChange(e) }} />
				</div>
				<div className="Options__username-description color--1a f6 tc">The username that will appear on the score menu</div>
				<BackButton style={{marginTop: '6rem'}}/>
			</div>
		);
	}
}
export default observer(Options);
