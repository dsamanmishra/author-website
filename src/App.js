import React, { Component } from 'react';
import swal from 'sweetalert';
import logo from './logo.svg';
import image1 from './images/pic1.jpg';
import image2 from './images/pic2.png';
import image3 from './images/pic3.jpg';
import image4 from './images/pic4.jpg';
import book1 from './images/book1.jpg';
import book2 from './images/book2.jpg';
import fb from './images/facebook.png';
import twitter from './images/twitter.png';
import insta from './images/instagram.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="col-md-9 col-md-offset-1 col-sm-9 col-sm-offset-1 col-xs-12">
	      <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
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
      <div className="col-md-12 col-sm-12 col-xs-12 red-thick-line">
        <h1 className="website-title">Vaibhav<br />Lall</h1>
        <h2 className="website-subtitle">Author. Blogger. Entreprenuer. Traveler. Nature Lover.</h2>
        <div className="row">
          <div className="col-md-9 col-sm-9 col-xs-12 fading-images">
            <img className="image2" src={image2} />
            <img className="image3" src={image3} />
            <img className="image4" src={image4} />
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12 non-fading-images">
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
		<div className="col-md-12 col-sm-12 menu-div">
			<a href="https://medium.com/@taruvaibhav2009" className="menu-desktop-items">Blog</a>
			<a href="" className="menu-desktop-items">Books</a>
			<a className="menu-desktop-items" onClick={() => this.open_contact()}>Contact Me</a>
		</div>

    );
  }

  open_contact() {
    swal("You can mail me at: taru.vaibhav92@gmail.com");
  }
}

class About extends Component {
  render() {
    return (
    	<div className="col-md-12 col-sm-12 col-xs-12 about-book-cover">
		    <div className="col-md-6 col-sm-6 col-xs-12 about-div">
			    <h2 className="about-title">About Me</h2>
			    <p className="about-text">A serial entrepreneur turned author, Vaibhav Lall is an avid reader and an earnest writer. The journey began in 2011 with a freelance writing project for some extra pocket money, and the spark deftly transformed into an endless affair with word play and the magic it withholds.</p>
          <p className="about-text">Leading the editorial board in his ventures – Rise for India, HighApe, Top Brands and Products, and Bombheads, Vaibhav, assimilated the nuances and intricacies of multiple writing styles and formats.</p>
          <p className="about-text">Being fortunate enough to do what he loves the most as a ‘full time job’ coming from an engineering background, Vaibhav fancies the power of storytelling.</p>
		    </div>
		    <div className="col-md-6 col-sm-6 col-xs-12 book-cover-div">
		    	<img className="book-cover1" src={book1} />
		    	<img className="book-cover2" src={book2} />
		    	<div className="col-md-12 col-sm-12 col-xs-12 contact-more-details">
		    		<p onClick={() => this.open_contact()} className="contact-details-text">Contact me for more details</p>
		    	</div>
		    </div>
		</div>

    );
  }

  open_contact() {
    swal("You can mail me at: taru.vaibhav92@gmail.com");
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="col-md-12 col-sm-12 social-media-links-div">
            <img className="social-media-links" src={fb} />
            <img className="social-media-links" src={twitter} />
            <a href="https://in.linkedin.com/in/vaibhav-lall-4091a9a2"><img className="social-media-links" src={insta} /></a>
      </div>
    );
  }
}

export default App;
