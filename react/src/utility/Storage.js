/*
* Handles the storage of different fields in the game
*/
class Storage {

	constructor(){
		this.stats = [];

		try {
			this.stats = this.loadStatsFromStorage();
		} catch(err) {
			console.log(err);
		}
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
			 	const loaded_stats = JSON.parse(storage.stats); //Get a javascript object
			 	return loaded_stats;
			 } else {
				return {
					whiteTiles: 0,
					blackTiles: 0,
					gamesPlayed: 0,
					gamesCompleted: 0
			}
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

			//Create a json object
			storage.stats = JSON.stringify(this.stats);
		} else {
			throw Error("No HTML5 web storage found on browser");
		}
	}
}

const storage = window.storage = new Storage();

export default storage;
