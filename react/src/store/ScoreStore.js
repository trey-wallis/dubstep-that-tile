import { decorate, observable } from 'mobx';

class ScoreStore {

  constructor(){
    this.scores = [];
    this.serverAddress = "https://dubstep-that-tile.herokuapp.com";
  }

  fetchScores(mode=50){
    console.log("Fetching scores. Mode", mode);
    fetch(this.serverAddress + '/scores?mode=' + mode)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.scores = data;
    })
    .catch(err => console.log(err));
  }

  pushScore(date, username, time, mode){
    if (username === '')
      username = "New User";
    console.log("Pushing score", date, username, time, mode);
    fetch(this.serverAddress + '/scores', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        date: date,
        username: username,
        time: time,
        mode: mode
      })
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));
  }
}

decorate(ScoreStore, {
	scores: observable
})

const scoreStore = window.scoreStore = new ScoreStore();

export default scoreStore;
