
class ScoreStore {

  constructor(){
    this.scores = [];
    for(let i = 0; i < 10; i++)
      this.scores.unshift({name: 'hi', date: '07/19/20', score:'29.9'});
  }

  fetchScores(){

  }
}

const scoreStore = window.scoreStore = new ScoreStore();

export default scoreStore;
