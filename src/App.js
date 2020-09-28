import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "bg-black",
      mode : "Night Mode ☀️"
    };
  }

  handleChange = (event) => {
    var color = this.state.backgroundColor;
    if(color === "bg-black"){
      return this.setState({
        mode : "Bright Mode 🌙",
        backgroundColor : 'bg-gradient'
      })
    } else if(color === "bg-gradient"){
      return this.setState({
        mode : "Night Mode ☀️",
        backgroundColor : 'bg-black'
      })
    }
  }

  render() {
    return (
      <div className="container-fluid bg-black text-white" className={`container-fluid text-white ${this.state.backgroundColor}`}>
        <a href="#" onClick={this.handleChange} className="text-white mode">{this.state.mode}</a>
        <Header/> 
        <Content/> 
        <Footer/> 
    </div>
    )
  }
}

