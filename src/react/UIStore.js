import React from 'react';
import { autorun, observable, decorate, computed } from "mobx";
import { WHITE_TILE,
		 BLACK_TILE,
		 YELLOW_TILE,
		 NUM_TILES_X,
		 NUM_TILES_Y,
		 KEY_A,
		 KEY_S,
		 KEY_D,
		 KEY_F }
		from './GameConstants';

class UIStore {

	constructor(){
		this.route = "title";
		this.tiles = [];
		this.filteredTiles = [];
		this.tileOffset = 0; //how many tiles we need to scroll
		this.initializeTiles();
	}

	getRandomNum(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	initializeTiles(){
		for (let y = 0; y < NUM_TILES_Y; y++){
			//Get a random number between 0 and 1
			//If we have already placed a black tile
			const num  = this.getRandomNum(1,4);

			//If we have played a tile
			let black = false;

			//Number of loops in this cycle
			let iter = 0;
			for (let x = 0; x < NUM_TILES_X; x++){
				//Where we are currently at
				iter++;
				//Default tile to place
				let tile = WHITE_TILE.id;
				//Place a yellow row at the start and end
				if (y === 0 || (y === NUM_TILES_Y - 5)){
					tile = YELLOW_TILE.id;
				} else if (!black && iter == num && y < NUM_TILES_Y - 5){
					tile = BLACK_TILE.id;
					black = true;
				}
				this.tiles[x + y * NUM_TILES_X] = tile;
			}
		}
	}

	get filterTiles(){
		this.filteredTiles = this.tiles.filter((tile, id) => {
			const screenStart = this.tileOffset * NUM_TILES_X;
			const screenEnd = ((this.tileOffset + 4) * NUM_TILES_X - 1); //-1 because we start at 0
				if (id >= screenStart && id <= screenEnd){
					return true;
				}
		});

		const reversed = this.filteredTiles.reverse();

		return reversed.map((tile, id) => {
			switch(tile){
				case WHITE_TILE.id:
					return <img key={id} className="Tile" src={WHITE_TILE.svg} alt="white" />;
				case BLACK_TILE.id:
					return <img key={id} className="Tile" src={BLACK_TILE.svg} alt="black" />;
				default: //Yellow tile
					return <img key={id} className="Tile" src={YELLOW_TILE.svg} alt="yellow" />;
			}
		});
	}

	handleKeyPress(code){
		switch(code){
			//We have to remember that all these key codes are in reverse order
			//because the filtered array is reversed
			case KEY_A:
				if (this.filteredTiles[12] === WHITE_TILE.id){
					this.lose();
					return;
				}
				break;
			case KEY_S:
				if (this.filteredTiles[13] === WHITE_TILE.id){
					this.lose();
					return;
				}
				break;
			case KEY_D:
				if (this.filteredTiles[14] === WHITE_TILE.id){
					this.lose();
					return;
				}
				break;
			case KEY_F:
				if (this.filteredTiles[15] === WHITE_TILE.id){
					this.lose();
					return;
				}
				break;
			default:
				console.log("Key pressed", code);
		}
		this.tileOffset++;
		if (this.tileOffset === 50){
			this.win();
		}
	}

	win(){
		this.setRoute("gameover");
		this.resetTiles();
	}

	lose(){
		this.setRoute("gameover");
		this.resetTiles();
	}

	resetTiles(){
		this.initializeTiles();
		this.tileOffset = 0;
	}

	setRoute(route){
		this.route = route;
	}
}

decorate(UIStore, {
	route: observable,
	tileOffset: observable,
	filterTiles: computed,
})

const ui = window.ui = new UIStore();

export default ui;

autorun(()=>{
	console.log("New route:", ui.route);
	console.log("New tileoffset:", ui.tileOffset);
})