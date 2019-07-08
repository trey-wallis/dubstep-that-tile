import React, { Component } from 'react';
import { observer } from "mobx-react";

import LevelStore from '../store/LevelStore';

import { BLACK_TILE, WHITE_TILE, YELLOW_TILE} from '../constants/GameConstants';
import Rectangle from './Rectangle';

class Tiles extends Component {

	renderTiles(){
		//To do - change so we don't have to reverse on each time - reverse on array initalization
		const reversed = LevelStore.screenTiles.reverse(); //Reverse because we want to render top to bottom
		return reversed.map((tile, i) => {
			switch(tile){
				case WHITE_TILE:
					return <Rectangle key = { i } id = { "white-" + i } color = "white" mouse={ (e) => { LevelStore.handleClick(e) }}/>
				case BLACK_TILE:
					return <Rectangle key = { i } id = { "black-" + i } color = "black" mouse={ (e) => { LevelStore.handleClick(e) }}/>
				case YELLOW_TILE:
					return <Rectangle key = { i } id = { "yellow-" + i } color = "yellow" mouse={ (e) => { LevelStore.handleClick(e) }}/>
				default:
					return '';
			}
		});
	}

	render(){
		return(
  		<div className="Tiles flex flex-wrap" style={{width: '256px', height:'512px'}}>
        { this.renderTiles() }
  		</div>
    );
	}
}

export default observer(Tiles);
