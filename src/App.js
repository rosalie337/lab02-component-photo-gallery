import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js'
import ImageList from './ImageList';
import DropDown from './DropDown.js';

import images from './data/unicorn-data.js';


export default class App extends React.Component {
state = { 
    filter:''
  }

 handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  }
  render() {
    return ( 
      <div className="App">
        <h1>Horn Creatures</h1>
        <Header />
        <DropDown handleChange={this.handleChange}/>
        <ImageList creatures={images} filter={this.state.filter}/>
        <Footer />
      </div>
    );
  }
}