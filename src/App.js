import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import './App.css';
import Box from './Box.js';

class App extends Component{
    render(){
        return(
            <div className="App">
                <h1>Learning how React and Webpack shake hands has given me the desire to style this thing badly. I am sorry.</h1>
                <Box />
            </div>
        )
    }
}

export default hot(module)(App);