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
	      <div className="col-sm-8 col-sm-offset-2 col-sm-12 col-xs-12">
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
      <div className="col-sm-12 col-xs-12 red-thick-line">
        <h1 className="website-title">Vaibhav<br />Lall</h1>
        <div ClassName="row">
          <div className="col-sm-9 col-xs-12 fading-images">
            <img className="image2" src={image2} />
            <img className="image3" src={image3} />
            <img className="image4" src={image4} />
          </div>
          <div className="col-sm-3 col-xs-12 non-fading-images">
            <img className="image1" src="data:image/png;base64,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" />
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
//<img className="image1" src={image1} />

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
    	<div className="col-sm-12 col-xs-12 about-book-cover">
		    <div className="col-sm-6 col-xs-12 about-div">
			    <h2 className="about-title">About Me</h2>
			    <p className="about-text">Hailing from a small city, I have achieved a lot in my life. It was a great journey and after having done such a great work, I would now like to share the wisdom that I have achieved so far with my readers. Hope you guys will love it and have a nice time reading my books. Stay tuned for more updates guys!</p>
		    </div>
		    <div className="col-sm-6 col-xs-12 book-cover-div">
		    	<img className="book-cover1" src={book1} />
		    	<img className="book-cover2" src={book2} />
		    	<div className="col-sm-12 col-xs-12 contact-more-details">
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
