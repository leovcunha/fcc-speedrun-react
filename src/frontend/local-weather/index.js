import React, { Component } from "react";
import axios from "axios";
import "./local-weather.scss";


export default class LocalWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather:""
        };
    }
    render() {
        return (
            <div className="local-weather jumbotron" style={ this.state.divStyle }>
                <div className="row h1 justify-content-center">Local Weather</div>
                <hr className="p-5"/>
                <div className="row justify-content-center">
                    <img className="w-25 h-25" src={this.state.weather.image} />
                </div>
                <div className="row justify-content-center">{this.state.weather.description}</div>
                <div className="row justify-content-center">

                </div>
            </div>
        );
    }
}
