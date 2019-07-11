
class ScoreStore {

  constructor(){
    this.scores = [];
    this.localhost = true;
    this.server = this.localhost ? "127.0.0.1" : 'address';
  }

  fetchScores(mode=50){
    console.log("Fetching scores!", mode);
    console.log(this.server);
  }

  pushScore(date, name, time){
    if (name === '')
      name = "New User";
    console.log(date, name, time);
  }
}

const scoreStore = window.scoreStore = new ScoreStore();

export default scoreStore;
