import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="col-sm-8 col-sm-offset-2 col-xs-12">
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="col-sm-12">
        <h1 className="website-title">Vaibhav Lall</h1>
        <div className="col-sm-9">
          <img className="image2" src="./images/pic2.jpg" />
          <img className="image3" src="./images/pic3.jpg" />
          <img className="image4" src="./images/pic4.jpg" />
        </div>
        <div className="col-sm-3">
          <img className="image1" src="./images/pic1.jpg" />
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
