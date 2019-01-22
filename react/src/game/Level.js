import React from 'react';
import { observable, decorate, computed } from "mobx";
import { WHITE_TILE,
		 BLACK_TILE,
		 YELLOW_TILE,
		 NUM_TILES_X,
		 NUM_TILES_Y }
		 from '../GameConstants';

class Level {

	constructor(levelStore, numTilesToTraverse=NUM_TILES_Y){
		this.levelStore = levelStore;
		this.numTilesY = numTilesToTraverse + 4; //We add 4 more tiles so that we always have 4 white tiles at the end of the game
		this.tiles = [];
		this.filteredTiles = []; //The tiles to render on screen
		this.tileOffsetY = 0; //How many y tiles we want to scroll down
		this.initializeTiles();
	}

	random(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/*
	* Initializes the tile array with numTiles * NUM_TILES_X tiles
	*/
	initializeTiles(){
		for (let y = 0; y < this.numTilesY; y++){
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
				if (y === 0 || (y === this.numTilesY - 5)){
					tileId = YELLOW_TILE.id;
				//Place a black tile in the random location if we haven't already placed a tile,
				//and the random number equals the current x value, and before the last 4 rows
				} else if (!placedBlack && iteration === randomNum && y < this.numTilesY - 5){
					tileId = BLACK_TILE.id;
					placedBlack = true;
				}
				//Otherwise place a whtie tile
				this.tiles[x + y * NUM_TILES_X] = tileId;
			}
		}
	}

	/*
	* A computable function that will filter the tiles that we render to the screen
	* TODO optimize this
	*/ 
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
					return <div key={id} id={"white-" + id} className="Play__tile Play__tile--white" onClick={(e) => {this.levelStore.handleClick(e)}}></div>;
				case BLACK_TILE.id:
					return <div key={id} id={"black-" + id} className="Play__tile Play__tile--black" onClick={(e) => {this.levelStore.handleClick(e)}}></div>;
				default: //Yellow tile
					return <div key={id} id={"yellow-" + id} className="Play__tile Play__tile--yellow" onClick={(e) => {this.levelStore.handleClick(e)}}></div>;
			}
		});
	}

	getRenderTile(id){
		return this.filteredTiles[id];
	}

	increaseTileOffset(){
		this.tileOffsetY++;
	}

	get tileOffset(){
		return this.tileOffsetY;
	}

	get gameSize(){
		return this.numTilesY;
	}

	reset(){
		this.tileOffsetY = 0;
		this.initializeTiles();
	}
}

export default Level;

decorate(Level, {
	tileOffsetY: observable,
	filterTiles: computed
})

