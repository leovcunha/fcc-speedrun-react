import React, { Component } from "react";
import axios from "axios";
import "./local-weather.scss";


export default class LocalWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}

        };
    }

    getWeather() {
        try {
            navigator.geolocation.getCurrentPosition(pos => {
                axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}`)
                    .then(res => this.setState({ weather: res }));
            });
            return "success";
        } catch (error) {
            return error;
        }
    }
    render() {
        return (
            <div className="local-weather jumbotron" style={ this.state.divStyle }>
                <div className="row h1 justify-content-center">Local Weather</div>
                <hr className="p-5"/>
                <div className="row justify-content-center">
                    {this.state.weather} && <img src={`http://openweathermap.org/img/w/${this.state.weather.weather.icon}.png`} />
                </div>
                <div className="row justify-content-center">{this.state.weather.weather.description}</div>
                <div className="row justify-content-center">

                </div>
            </div>
        );
    }
}
