import React, { Component } from 'react';
import {AppContext} from './AppContext';

/*
* Import stores
*/
import ui from './UIStore';
import domain from './DomainStore';
import level from './LevelStore';

/*
* This works as a work around for not being able to use the built in provider with Mobx with @inject
* (because create-react-app 2 doesn't support decorators)
* Therefore we will make a custom provider using the context api to subscribe all components to both stores
* https://hackernoon.com/how-to-use-the-new-react-context-api-fce011e7d87
*/
class AppProvider extends Component {
  state = {
    ui: ui,
    domain: domain,
    level: level
  }
  
	render() {
	    return(
	    	<AppContext.Provider value={this.state}>
	        	{this.props.children}
	    	</AppContext.Provider>)
	  }
}

export default AppProvider;