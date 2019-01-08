import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { observable, decorate, computed } from "mobx";
import Timer from '../game/Timer';
import Level from '../game/Level';
import { WHITE_TILE, 
		 KEY_A,
		 KEY_S,
		 KEY_D,
		 KEY_F,
		 NUM_DECIMAL_TILE_SEC }
		from '../GameConstants';

class LevelStore {

	//Takes in the root store so we can access other initialized stores
	constructor(root){
		this.root = root;
		this.gameStarted = false;
		this.wonGame = false;
		this.timer = new Timer();
		this.level = new Level(this);
		this.traversed = 0;
		this.selectedTiles = 0;
	}

	handleKeyPress(code){
		if (code === KEY_A || code === KEY_S || code === KEY_D || code === KEY_F){
			if (!this.gameStarted){
				this.timer.start();
				this.gameStarted = true;
			}
			if (!this.checkLoseKey(code)){
				this.level.increaseTileOffset();
				if (this.level.tileOffset === this.level.gameSize - 4){ //We want to stop on the 4th to last row so we always render 3 white tiles
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
			this.level.increaseTileOffset();
			if (this.level.tileOffset === this.level.gameSize - 4){
				this.win();
			}
		} else {
			this.lose();
		}
	}

	checkLoseMouse(id){
		if (id.startsWith("white")) {
			return true;
		}
		return false;
	}

	checkLoseKey(code){
		switch(code){
			//We have to remember that all these key codes are in reverse order
			//because the filtered array is reversed
			case KEY_A:
				if (this.level.getRenderTile(12) === WHITE_TILE.id){
					return true;
				}
				return false;
			case KEY_S:
				if (this.level.getRenderTile(13) === WHITE_TILE.id){
					return true;
				}
				return false;
			case KEY_D:
				if (this.level.getRenderTile(14) === WHITE_TILE.id){
					return true;
				}
				return false;
			case KEY_F:
				if (this.level.getRenderTile(15) === WHITE_TILE.id){
					return true;
				}
				return false;
			default:
				console.log("Key pressed", code);
		}
	}

	get gameTiles(){
		return this.level.filterTiles;
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
		this.traversed = this.level.tileOffset;
		this.reset();
		this.root.ui.setRoute("gameover");
		this.wonGame = true;
	}

	lose(){
		this.traversed = this.level.tileOffset;
		this.reset();
		this.root.ui.setRoute("gameover");
	}

	reset(){
		this.timer.stop();
		this.timer.reset();
		this.level.reset();
		this.gameStarted = false;
		this.wonGame = false;
	}

	setLevel(numTiles){
		this.selectedTiles = numTiles;
		this.level = new Level(this, numTiles);
	}

	get modeSelect() {
		let options = ["<option value=\"10\">10</option>",
						"<option value=\"50\">50</option>",
						"<option value=\"100\">100</option>",
						"<option value=\"200\">200</option>",
						"<option value=\"1000\">1000</option>",
						"<option value=\"5000\">Infinite (5000)</option>"];
		let optionsOut = [];
		for (let i = 0; i < options.length; i++) {
			if (options[i].includes("value=\"" + this.selectedTiles + "\"")) {
				console.log(options[i]);
				options[i] = options[i].replace("value", "selected value");
			}
			optionsOut.push(ReactHtmlParser(options[i]));
		}
		return optionsOut;
	}
}

decorate(LevelStore, {
})

export default LevelStore;