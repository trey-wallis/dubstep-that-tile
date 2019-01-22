import { decorate, observable } from "mobx";
import Timer from '../game/Timer';
import Level from '../game/Level';
import Statistics from '../game/Statistics';
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
		this.statistics = new Statistics();
		this.traversed = 0;
		this.selectedTiles = 50;
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
		if (this.validClick(e.target.id)){
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
	}

	checkLoseMouse(id){
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

	get totalWhiteTiles(){
		return this.statistics.white;
	}

	get totalBlackTiles(){
		return this.statistics.black;
	}

	get totalTiles(){
		return (this.statistics.black + this.statistics.white);
	}

	get totalCompletedGames(){
		return this.statistics.completed;
	}

	get totalPlayedGames(){
		return this.statistics.games;
	}

	get averageTilesPerSecond(){
		return this.statistics.averageTiles;
	}

	win(){
		this.traversed = this.level.tileOffset;
		this.statistics.playedGame();
		this.statistics.completedGame();
		this.statistics.increaseBlackTiles(this.traversed);
		this.reset();
		this.wonGame = true;
		this.root.ui.setRoute("gameover");
	}

	lose(){
		this.traversed = this.level.tileOffset;
		this.statistics.playedGame();
		this.statistics.increaseWhiteTile();
		this.statistics.increaseBlackTiles(this.traversed);
		this.reset();
		this.root.ui.setRoute("gameover");
	}

	reset(){
		this.statistics.saveStatsToStorage();
		this.timer.stop();
		this.timer.reset();
		this.level.reset();
		this.gameStarted = false;
		this.wonGame = false;
	}

	set mode(numTiles){
		this.selectedTiles = numTiles;
		this.level = new Level(this, numTiles);
	}

	get mode(){
		return this.selectedTiles;
	}
}

decorate(LevelStore, {
	selectedTiles: observable
})

export default LevelStore;