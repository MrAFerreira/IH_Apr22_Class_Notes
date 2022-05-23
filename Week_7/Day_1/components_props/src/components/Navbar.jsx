import React, { Component } from 'react';
import MyButton from './MyButton';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <p>Hello {this.props.username}</p>
        <a href="https://reactjs.org"> Check the docs</a>
        <MyButton />
        <MyButton />
      </nav>
    );
  }
}

export default Navbar;
