import React, { Component } from 'react';
import { AppContext } from './AppContext';
import { Observer } from "mobx-react";
import Title from './menu/Title';
import Register from './menu/Register';
import Login from './menu/Login';
import About from './menu/About';
import Play from './menu/Play';
import GameOver from './menu/GameOver';
import Options from './menu/Options';
import Score from './menu/Score';
import Statistics from './menu/Statistics'

class ViewLayer extends Component {

  render() {
    return (
      <div className="Canvas w-50 h-75">
          <AppContext.Consumer>
	        {
	        	(context) => (
                <Observer>
                  { ()=> {
      	        		switch(context.ui.route){
                    case "register":
                      return <Register ui={context.ui} />
                    case "login":
                      return <Login ui={context.ui} />
                    case "scores":
                     return <Score ui={context.ui} />
                    case "statistics":
                      return <Statistics ui={context.ui} />
                    case "options":
                      return <Options ui={context.ui} />
                    case "about":
                      return <About ui={context.ui} />
                    case "gameover":
                      return <GameOver ui={context.ui} />
                    case "play":
                      return <Play ui={context.ui} />
                    default:
                      return <Title ui={context.ui}/>
                    }
                  }
                }
            </Observer>
            )
         	}
          </AppContext.Consumer>
      </div>
    );
  }
}

export default ViewLayer;
