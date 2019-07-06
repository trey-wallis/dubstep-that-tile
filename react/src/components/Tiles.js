import React, { Component } from 'react';
import { observer } from "mobx-react";

import LevelStore from '../store/LevelStore';

import { BLACK_TILE, WHITE_TILE, YELLOW_TILE } from '../constants/GameConstants';

class Tiles extends Component {

	renderTiles(){
		//To do - change so we don't have to reverse on each time - reverse on array initalization
		const reversed = LevelStore.screenTiles.reverse(); //Reverse because we want to render top to bottom
		return reversed.map((tile, i) => {
			switch(tile){
				case WHITE_TILE.id:
					return <img key={i} draggable={false} id={ "white-" + i } svg={ WHITE_TILE.svg } alt="white" style={{width: '64px', height: '128px'}} onClick={ (e) => { LevelStore.handleClick(e) }}/>;
				case BLACK_TILE.id:
					return <img key={i} draggable={false} id={ "black-" + i } src = { BLACK_TILE.svg } alt="black" style={{width: '64px', height:'128px'}} onClick={ (e) => { LevelStore.handleClick(e) }}/>;
				case YELLOW_TILE.id:
					return <img key={i} draggable={false} id={ "yellow-" + i } src={ YELLOW_TILE.svg } alt="yellow" style={{width:'64px', height:'128px'}} onClick={ (e) => { LevelStore.handleClick(e) }}/>;
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
