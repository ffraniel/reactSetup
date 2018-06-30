import React, { Component } from 'react';
import './Box.css';
import twinsImage from './arnold-schwarzenegger-danny-devito-twins.jpg'

class Box extends Component{
    render(){
        return(
            <section className="Box">
                <p>Just setup Webpack on a React project in order to keep the Twins happy.</p>
                <img src={twinsImage} /> 
            </section>
        )
    }
}
export default Box;