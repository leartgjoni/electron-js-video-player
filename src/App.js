import React, { Component } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

class App extends Component {

    render() {
      return (
        <div className="App" style={{height: '100%'}}>
            <HomeScreen />
        </div>
      );
    }
}

export default App;

