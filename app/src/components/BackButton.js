import React, { Component } from 'react';

import MenuStore from '../store/MenuStore';
import LevelStore from '../store/LevelStore';

class BackButton extends Component {

  reset(retry){
      LevelStore.reset();
      if (retry)
        MenuStore.currentMenu = "play";
      else
        MenuStore.currentMenu = "home";
  }

  render(){
    return(
  		<div className="BackButton flex justify-center" style={ this.props.style }>
  			<button className="bg-color--none outline--none bw0 dim f4"
         onClick={ ()=>{ this.reset(this.props.retry) }}>{ this.props.retry ? "Retry" : "Back"}</button>
  		</div>
    );
  }
}

export default BackButton;
