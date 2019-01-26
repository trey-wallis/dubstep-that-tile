/*
* Handles the scores menu of the game
*/
class Scores {

	constructor(){
		this.tiles = [];
		this.tps = [];
		this.time = [];
		try{
			this.loadScoresFromStorage();
		} catch(e){
			console.log(e.message);
		}
	}

	playedGame(tiles, tps, time){
		this.tiles.unshift(tiles);
		this.tps.unshift(tps);
		this.time.unshift(time);
	}

	/*
	* Loads the scores from the local browser storage
	*/
	loadScoresFromStorage(){
		//Check if the HTML5 storage api is available
		if (typeof(Storage) !== "undefined") {
			//This is the local storage object. It won't be reset by the browser upon close
			const storage = window.localStorage;

			//Get the values
			if (storage.scores){
				const scores = JSON.parse(storage.scores); //Get a javascript object
				this.tiles = scores.tiles;
				this.tps = scores.tps;
				this.time = scores.time;
			}
		} else {
			throw Error("No HTML5 web storage found on browser");
		}
	}

	/*
	* Saves the scores to a .dat file
	*/
	saveScoresToStorage(){
		//Check if the HTML5 storage api is available
		if (typeof(Storage) !== "undefined") {
			//This is the local storage object. It won't be reset by the browser upon close
			const storage = window.localStorage;
			const scores = {
				tiles: this.tiles,
				tps: this.tps,
				time: this.time
			}
			storage.scores = JSON.stringify(scores);
		} else {
			throw Error("No HTML5 web storage found on browser");
		}
	}

}

export default Scores;