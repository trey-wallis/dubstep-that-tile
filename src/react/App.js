import React, { Component } from 'react';
import ViewLayer from './ViewLayer';

class App extends Component {

  render() {
  	window.appprops = this.props;
    return (
      <div className="App vw-100 vh-100 flex justify-center items-center">
        <ViewLayer />
      </div>
    );
  }
}

export default App;
