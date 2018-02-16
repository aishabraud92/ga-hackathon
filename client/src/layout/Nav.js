import React, { Component } from 'react';
import logo from '../logo.svg';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/profile">Profile</Link>
          <Logout updateUser={this.props.updateUser} />
        </span>);
    }
    else {
      links = (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </span>);
    }

    return(
        <div>
          <nav className="nav">
            <a href="/">Home</a>
             {links}
          </nav>
            <img src='http://freevector.co/wp-content/uploads/2013/10/1515-face-of-clown-with-hat1.png' className="App-logo" alt="logo" />
            <h1 className="App-title">Clown-O-Gram</h1>

        </div>
      );
  }
}

export default Nav;
