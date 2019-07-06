import { decorate, observable, computed} from "mobx";

import Storage from '../utility/Storage';
import TimerStore from '../store/TimerStore';
import MenuStore from '../store/MenuStore';

import {
	NUM_TILES_X,
	NUM_TILES_Y,
	 WHITE_TILE,
	 BLACK_TILE,
	 YELLOW_TILE,
		 KEY_A,
		 KEY_S,
		 KEY_D,
		 KEY_F,
		 NUM_DECIMAL_TILE_SEC }
		from '../constants/GameConstants';

class LevelStore {

	constructor(){
		this.started = false;
		this.won = false;
		this.traversed = 0;
		this.modeTiles = NUM_TILES_Y;
		this.tiles = [];
		this.tileOffsetY = 0; //How manyy tiles we want to scroll down
		this.initializeTiles();
	}

	/*
	* Initializes the tile array
	*/
	initializeTiles(){
		for (let y = 0; y < (this.modeTiles + 4); y++){
			//Get a random number between 1 and 4 inclusive
			const randomNum  = this.random(1,4);

			//If we have played a tile
			let placedBlack = false;

			//Number of loops in this cycle
			let iteration = 0;

			for (let x = 0; x < NUM_TILES_X; x++){
				//Where we are currently at
				iteration++;

				//Default tile to place
				let tileId = WHITE_TILE.id;

				//Place a yellow row at the start and then 5 tiles from the end
				//so that we always have 4 white tiles from the end
				if (y === 0 || (y === this.modeTiles - 1)){
					tileId = YELLOW_TILE.id;
				//Place a black tile in the random location if we haven't already placed a tile,
				//and the random number equals the current x value, and before the last 4 rows
			} else if (!placedBlack && iteration === randomNum && y < this.modeTiles - 1){
					tileId = BLACK_TILE.id;
					placedBlack = true;
				}
				//Otherwise place a whtie tile
				this.tiles[x + y * NUM_TILES_X] = tileId;
			}
		}
	}

	random(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/*
	* A computable function that will filter the tiles that we render to the screen
	*/
	get screenTiles(){
		return this.tiles.filter((tile, id) => {
			const screenStart = this.tileOffsetY * NUM_TILES_X;
			const screenEnd = ((this.tileOffsetY + 4) * NUM_TILES_X - 1); //-1 because we start at 0
				if (id >= screenStart && id <= screenEnd)
					return true;
				return false;
		});
	}

	handleClick(e){
		if (this.validClick(e.target.id)){
			//If we haven't started, then start and turn on the timer
			if (!this.started){
				TimerStore.start();
				this.started = true;
			}
			if (!this.mouseCheckWhiteTile(e.target.id)){
				this.tileOffsetY++;
				if (this.tileOffsetY === this.modeTiles)
				this.endGame(true);
			} else {
				this.endGame(false);
			}
		}
	}

	//If it's a white tile - then we lost
	mouseCheckWhiteTile(id){
		if (id.startsWith("white")) {
			return true;
		}
		return false;
	}

	/*
	* Make sure we only accept input for the bottom 4 tiles on the screen
	*/
	validClick(id){
		if(id.includes("12") || id.includes("13") || id.includes("14") || id.includes("15")){
			return true;
		}
		return false;
	}

	handleKeyPress(code){
		if (!this.started){
			TimerStore.start();
			this.started = true;
		}
		if (!this.keyCheckWhiteTile(code)){
			this.tileOffsetY++;
			//We want to stop on the 4th to last row so we always render 3 white tiles
			if (this.tileOffsetY === this.modeTiles)
				this.endGame(true);
		} else {
			this.endGame(false);
		}
	}

	keyCheckWhiteTile(code){
		 switch(code){
		 	//We have to remember that all these key codes are in reverse order
		 	//because the filtered array is reversed
			case KEY_A:
				if (this.tiles[this.tileOffsetY] === WHITE_TILE.id)
					return true;
				return false;
			case KEY_S:
				if (this.tiles[this.tileOffsetY + 1]  === WHITE_TILE.id)
					return true;
				return false;
			case KEY_D:
				if (this.tiles[this.tileOffsetY + 2]  === WHITE_TILE.id)
					return true;
				return false;
			case KEY_F:
				if (this.tiles[this.tileOffsetY + 3]  === WHITE_TILE.id)
					return true;
				return false;
			default:
				return false;
			}
	}

	get tilesPerSecond(){
		return (this.tileOffsetY / TimerStore.elapsed).toFixed(NUM_DECIMAL_TILE_SEC);
	}

	get whiteTiles(){
		return Storage.stats.whiteTiles;
	}

	get blackTiles(){
		return Storage.stats.blackTiles;
	}

	get totalTiles(){
		return this.whiteTiles + this.blackTiles;
	}

	get totalCompletedGames(){
		return Storage.stats.gamesCompleted;
	}

	get totalPlayedGames(){
		return Storage.stats.gamesPlayed;
	}

	endGame(win){
		TimerStore.stop();
		MenuStore.currentMenu = "gameover";
		if (win)
			this.win();
		else
			this.lose();
	}

	increaseStats(win, blackTiles){
		Storage.stats.gamesPlayed++;
		Storage.stats.blackTiles += blackTiles;
		if (!win)
			Storage.stats.whiteTiles++;
		else
			Storage.stats.gamesCompleted++;
	}

	win(){
		this.increaseStats(true, this.tileOffsetY);
		this.won= true;
	}

	lose(){
		this.increaseStats(false, this.tileOffsetY);
		this.won = false;
	}

	reset(){
		Storage.saveStatsToStorage();
		TimerStore.reset();
		this.started = false;
		this.won = false;
		this.tileOffsetY = 0;
		this.initializeTiles();
	}
}

decorate(LevelStore, {
	modeTiles: observable,
	tileOffsetY: observable,
	screenTiles: computed
})

const levelStore = window.levelStore = new LevelStore();

export default levelStore;
