import React, { Component } from 'react';
import logo from './logo.svg';
import image1 from './images/pic1.jpg';
import image2 from './images/pic2.jpg';
import image3 from './images/pic3.jpg';
import image4 from './images/pic4.jpg';
import book1 from './images/book1.png';
import book2 from './images/book2.jpg';
import fb from './images/facebook.png';
import twitter from './images/twitter.png';
import insta from './images/instagram.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="col-sm-9 col-sm-offset-1 col-xs-12">
	      <div className="col-sm-8 col-sm-offset-2 col-xs-12">
	        <Header />
	        <Menu />
	        <About />
	        <Footer />
	      </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="col-sm-12 red-thick-line">
        <h1 className="website-title">Vaibhav<br />Lall</h1>
        <div ClassName="row">
          <div className="col-sm-9 fading-images">
            <img className="image2" src={image2} />
            <img className="image3" src={image3} />
            <img className="image4" src={image4} />
          </div>
          <div className="col-sm-3 non-fading-images">
            <img className="image1" src={image1} />
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}


class Menu extends Component {
  render() {
    return (
		<div className="col-sm-12 menu-div">
			<a href="" className="menu-desktop-items">Blog</a>
			<a href="" className="menu-desktop-items">Books</a>
			<a href="" className="menu-desktop-items">Contact Me</a>
		</div>

    );
  }
}

class About extends Component {
  render() {
    return (
    	<div className="col-sm-12 about-book-cover">
		    <div className="col-sm-6 about-div">
			    <h2 className="about-title">About Me</h2>
			    <p className="about-text">Hailing from a small city, I have achieved a lot in my life. It was a great journey and after having done such a great work, I would now like to share the wisdom that I have achieved so far with my readers. Hope you guys will love it and have a nice time reading my books. Stay tuned for more updates guys!</p>
		    </div>
		    <div className="col-sm-6 book-cover-div">
		    	<img className="book-cover1" src={book1} />
		    	<img className="book-cover2" src={book2} />
		    	<div className="col-sm-12 contact-more-details">
		    		<p className="contact-details-text">Contact me for more details</p>
		    	</div>
		    </div>
		</div>

    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="col-sm-12 social-media-links-div">
            <img className="social-media-links" src={fb} />
            <img className="social-media-links" src={twitter} />
            <img className="social-media-links" src={insta} />
      </div>
    );
  }
}

export default App;
