import React from 'react';
import { observable, computed, decorate } from 'mobx';

import Home from '../components/Home';
import Play from '../components/Play';
import Statistics from '../components/Statistics';
import Scores from '../components/Scores';
import Options from '../components/Options';
import About from '../components/About';
import GameOver from '../components/GameOver';

class MenuStore {

  constructor(){
    this.currentMenu = "home";
  }

  get renderMenu(){
    switch(this.currentMenu){
      case "play":
        return <Play/>
      case "options":
        return <Options/>
      case "about":
        return <About/>
      case "scores":
        return <Scores/>
      case "statistics":
        return <Statistics/>
      case "gameover":
        return <GameOver/>
      default:
        return <Home/>
    }
  }
}

decorate(MenuStore, {
	currentMenu: observable,
	renderMenu: computed
})

const menuStore = window.menuStore = new MenuStore();
export default menuStore;
