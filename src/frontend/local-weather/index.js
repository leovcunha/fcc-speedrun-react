import React, { Component } from "react";
import axios from "axios";
import "./local-weather.scss";


export default class LocalWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                weather: [{
                    icon: "",
                    description: "",

                }]
            }

        };
    }
    getPosition(options) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }
    getWeather() {
        try {
            this.getPosition()
                .then(pos => {
                    this.setState({ position: pos });
                }).then(() =>
                    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.position.coords.latitude}&lon=${this.state.position.coords.longitude}&appid=663256a5a9993f3aa5e9f557920e8f24`)
                        .then(res => this.setState({ data: res.data })))
                .then(() => {
                    this.setState({
                        fahrenheit: {
                            temp: (this.state.data.main.temp * (9 / 5)) + 32,
                            temp_min: (this.state.data.main.temp_min * (9 / 5)) + 32,
                            temp_max: (this.state.data.main.temp_max * (9 / 5)) + 32
                        }
                    });
                });


            return "success";
        } catch (error) {
            return error;
        }
    }

    componentDidMount() {
        this.getWeather();
    }

    render() {
        console.log(this.state.position);
        console.log(this.state.data);
        return (
            <div className="local-weather jumbotron">
                <div className="row h1 justify-content-center">Local Weather</div>
                <hr className="p-5"/>
                <div className="row justify-content-center">
                    {(this.state.data.weather[0].icon !== "") && <img src={`http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`} />}
                </div>
                <div className="row justify-content-center">{this.state.data.weather[0].description}</div>
                <div className="row justify-content-center">

                </div>
                <div className="row justify-content-center mt-5">
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label mr-5" for="customRadio1">Celsius</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input ml-5"/>
                        <label className="custom-control-label" for="customRadio2">Fahrenheit</label>
                    </div>
                </div>

            </div>
        );
    }
}
