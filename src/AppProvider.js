import React, { Component } from 'react';
import {AppContext} from './AppContext';

/*
* Import stores
*/
import UIStore from './UIStore';
import DomainStore from './DomainStore';

const ui = new UIStore();
const domain = new DomainStore();

/*
* This works as a work around for not being able to use decorators and @inject to make a provider
* to subscribe all components to the stores.
* We use the built in react context API to do so.
* We create a context, make a provider that will wrap the app component, and pass the state down as a value
* and then we get the consumer from the context and are able to access the state
*
* https://hackernoon.com/how-to-use-the-new-react-context-api-fce011e7d87
*/
class AppProvider extends Component {
  state = {
    ui: ui,
    domain: domain
  }
  
	render() {
	    return <AppContext.Provider value={this.state}>
	         {this.props.children}
	    </AppContext.Provider>
	  }
}

export default AppProvider;