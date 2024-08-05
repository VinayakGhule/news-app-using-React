// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


import React, { Component } from 'react'
import News from './components/News';

const apiKey=process.env.REACT_APP_API_KEY
export default class App extends Component {
  name = 'vinayak';
  render() {
    return (
      <>
        <Navbar />
        <News/>
      </>
    )
  }
}
