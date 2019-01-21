/*
* Handles the statistic menu of the game
*/
class Statistics {

	constructor(){
		this.whiteTiles = 0;
		this.blackTiles = 0;
		this.gamesPlayed = 0;
		this.gamesCompleted = 0;
		try{
			this.loadStatsFromStorage();
		} catch(e){
			console.log(e.message);
		}
	}

	increaseWhiteTile(){
		this.whiteTiles++;
	}

	increaseBlackTiles(tiles){
		this.blackTiles += tiles;
	}

	playedGame(){
		this.gamesPlayed++;
	}

	completedGame(){
		this.gamesCompleted++;
	}

	get white(){
		return this.whiteTiles;
	}

	get black(){
		return this.blackTiles;
	}

	/*
	* The number of games that we have played
	*/
	get games(){
		return this.gamesPlayed;
	}


	/*
	* The number of games that we have actually completed
	*/ 
	get completed(){
		return this.gamesCompleted;
	}

	/*
	* Loads the stats from the local browser storage
	*/
	loadStatsFromStorage(){
		//Check if the HTML5 storage api is available
		if (typeof(Storage) !== "undefined") {
			//This is the local storage object. It won't be reset by the browser upon close
			const storage = window.localStorage;

			//Get the values
			if (storage.stats){
				const stats = JSON.parse(storage.stats); //Get a javascript object
				this.whiteTiles = stats.whiteTiles;
				this.blackTiles = stats.blackTiles;
				this.gamesPlayed = stats.gamesPlayed;
				this.gamesCompleted = stats.gamesCompleted;
			}
		} else {
			throw Error("No HTML5 web storage found on browser");
		}
	}

	/*
	* Saves the stats to a .dat file
	*/
	saveStatsToStorage(){
		//Check if the HTML5 storage api is available
		if (typeof(Storage) !== "undefined") {
			//This is the local storage object. It won't be reset by the browser upon close
			const storage = window.localStorage;
			const stats = {
				whiteTiles: this.whiteTiles,
				blackTiles: this.blackTiles,
				gamesPlayed: this.gamesPlayed,
				gamesCompleted: this.gamesCompleted
			}
			storage.stats = JSON.stringify(stats);
		} else {
			throw Error("No HTML5 web storage found on browser");
		}
	}
}

export default Statistics;