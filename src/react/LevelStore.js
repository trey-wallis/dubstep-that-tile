import React from 'react';
import { autorun, observable, decorate, computed } from "mobx";
import ui from './UIStore';
import Timer from './Timer';
import { WHITE_TILE,
		 BLACK_TILE,
		 YELLOW_TILE,
		 NUM_TILES_X,
		 NUM_TILES_Y,
		 NUM_TILES,
		 KEY_A,
		 KEY_S,
		 KEY_D,
		 KEY_F,
		 NUM_DECIMAL_TILE_SEC }
		from './GameConstants';

class LevelStore {

	constructor(){
		this.tiles = [];
		this.filteredTiles = [];
		this.tileOffset = 0; //how many tiles we need to scroll
		this.initializeTiles();
		this.gameStarted = false;
		this.wonGame = false;
		this.timer = new Timer();
		this.traversed = 0;
	}

	getRandomNum(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	initializeTiles(){
		//Initialize the tile array
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
				//Place a black tile in the random location
				} else if (!black && iter === num && y < NUM_TILES_Y - 5){
					tile = BLACK_TILE.id;
					black = true;
				}
				this.tiles[x + y * NUM_TILES_X] = tile;
			}
		}
		//Intialize the filteredTiles array - which is just 12 tiles
	}

	get filterTiles(){
		this.filteredTiles = this.tiles.filter((tile, id) => {
			const screenStart = this.tileOffset * NUM_TILES_X;
			const screenEnd = ((this.tileOffset + 4) * NUM_TILES_X - 1); //-1 because we start at 0
				if (id >= screenStart && id <= screenEnd){
					return true;
				}
				return false;
		});

		const reversed = this.filteredTiles.reverse();

		return reversed.map((tile, id) => {
			switch(tile){
				case WHITE_TILE.id:
					return <img key={id} id={"white-" + id} className="Tile" src={WHITE_TILE.svg} onClick={(e) => {this.handleClick(e)}} alt="white" />;
				case BLACK_TILE.id:
					return <img key={id} id={"black-" + id} className="Tile" src={BLACK_TILE.svg} onClick={(e) => {this.handleClick(e)}} alt="black" />;
				default: //Yellow tile
					return <img key={id} id={"yellow-" + id} className="Tile" src={YELLOW_TILE.svg} onClick={(e) => {this.handleClick(e)}} alt="yellow" />;
			}
		});
	}

	handleKeyPress(code){
		if (code === KEY_A || code === KEY_S || code === KEY_D || code === KEY_F){
			if (!this.gameStarted){
				this.timer.start();
				this.gameStarted = true;
			}
			if (!this.checkLoseKey(code)){
				this.tileOffset++;
				if (this.tileOffset === 50){
					this.win();
				}
			} else {
				this.lose();
			}
		}
	}

	handleClick(e){
		if (!this.gameStarted){
			this.timer.start();
			this.gameStarted = true;
		}
		if (!this.checkLoseMouse(e.target.id)){
			this.tileOffset++;
			if (this.tileOffset === 50){
				this.win();
			}
		} else {
			this.lose();
		}
	}

	checkLoseMouse(id){
		if (id === "white-12" || id === "white-13" || id === "white-14" || id === "white-15"){
			return true;
		}
		return false;
	}

	checkLoseKey(code){
		switch(code){
			//We have to remember that all these key codes are in reverse order
			//because the filtered array is reversed
			case KEY_A:
				if (this.filteredTiles[12] === WHITE_TILE.id){
					return true;
				}
				return false;
			case KEY_S:
				if (this.filteredTiles[13] === WHITE_TILE.id){
					return true;
				}
				return false;
			case KEY_D:
				if (this.filteredTiles[14] === WHITE_TILE.id){
					return true;
				}
				return false;
			case KEY_F:
				if (this.filteredTiles[15] === WHITE_TILE.id){
					return true;
				}
				return false;
			default:
				console.log("Key pressed", code);
		}
	}

	get time(){
		return `${this.timer.displayElapsed}s`;
	}

	get lastTime(){
		return this.timer.displayLastTime;
	}

	get tilesPerSecond(){
		return (this.traversed / this.lastTime).toFixed(NUM_DECIMAL_TILE_SEC);
	}

	win(){
		this.traversed = this.tileOffset;
		this.resetGame();
		ui.setRoute("gameover");
		this.wonGame = true;
	}

	lose(){
		this.traversed = this.tileOffset;
		this.resetGame();
		ui.setRoute("gameover");
	}

	resetGame(){
		this.timer.stop();
		this.timer.reset();
		this.tileOffset = 0;
		this.gameStarted = false;
		this.wonGame = false;
		this.initializeTiles();
	}
}

decorate(LevelStore, {
	tileOffset: observable,
	filterTiles: computed
})

const level = window.level = new LevelStore();

export default level;

autorun(()=>{
	console.log("Level", "tileoffset", level.tileOffset);
})