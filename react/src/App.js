import React, { Component } from 'react';
import ViewLayer from './ViewLayer';

class App extends Component {

//  componentDidMount(){
// 	fetch('http://localhost:3006/')
// 	.then(console.log);
// }

  render() {
    return (
      <div className="App vw-100 vh-100 flex justify-center items-center">
        <ViewLayer />
      </div>
    );
  }
}

export default App;
