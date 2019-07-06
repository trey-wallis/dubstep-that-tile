import React, { Component } from 'react';
import { observer } from "mobx-react";

import LevelStore from '../store/LevelStore';
import TimerStore from '../store/TimerStore';
import Tiles from './Tiles';

import '../css/Play.css';

import { KEY_A,
		 KEY_S,
		 KEY_D,
		 KEY_F }
		from '../constants/GameConstants';

class Play extends Component {

	//We add this piece so that the component will focus after it is rerendered
  componentDidMount() {
    this.input.focus();
  }

  handleKeyPress(code){
    if (code === KEY_A || code === KEY_S || code === KEY_D || code === KEY_F){
      LevelStore.handleKeyPress(code);
		}
  }

	render(){
		return(
  		<div className="Play" onKeyPress={(e) => {this.handleKeyPress(e.charCode)}} tabIndex="0" ref={(node) => this.input = node}>
  			<div className="Play__tiles flex justify-center items-center h-100">
  				<Tiles/>
  			</div>
  			<div className="Play__timer">
  				<div className="Play__timer-text tr mt2 f3 dark-red">
  				 { TimerStore.elapsed }s
  				</div>
  			</div>
  		</div>
    );
	}
}

export default observer(Play);
