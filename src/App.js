import React, { Component } from 'react';
import logo from './logo.svg';
import image1 from './images/pic1.jpg';
import image2 from './images/pic2.jpg';
import image3 from './images/pic3.jpg';
import image4 from './images/pic4.jpg';
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
      <div className="col-sm-12 red-thick-line">
        <h1 className="website-title">Vaibhav Lall</h1>
        <div ClassName="row">
          <div className="col-sm-9 fading-images">
            <img className="image2" src={image2} />
            <img className="image3" src={image3} />
            <img className="image4" src={image4} />
          </div>
          <div className="col-sm-3">
            <img className="image1" src={image1} />
          </div>
        </div>
        <div className="clearfix"></div>
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
