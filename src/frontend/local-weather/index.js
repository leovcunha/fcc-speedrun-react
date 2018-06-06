import React, { Component } from "react";
import axios from "axios";
import "./local-weather.scss";
import WeatherIcon from "./weathericon";
import MainInfo from "./maininfo";


export default class LocalWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                weather: [{
                    icon: "",
                    description: "",
                }],
                name: "Loading",
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                    humidity: 0
                },
            },
            celsius: true,
            fahrenheit: {
                temp: 0,
                temp_min: 0,
                temp_max: 0,
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
                    this.setState({ position: pos.coords });
                }).then(() =>
                    axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.state.position.latitude}&lon=${this.state.position.longitude}&appid=663256a5a9993f3aa5e9f557920e8f24`)
                        .then(res => this.setState({ data: res.data })))
                .then(() => {
                    const celsius = this.state.data.main;
                    this.setState({

                        fahrenheit: {
                            temp: ((celsius.temp - 273) * (9 / 5)) + 32,
                            temp_min: ((celsius.temp_min - 273) * (9 / 5)) + 32,
                            temp_max: ((celsius.temp_max - 273) * (9 / 5)) + 32
                        }
                    });
                })
                .catch((error) => { throw error });
        } catch (error) {
            alert(error.message);
        }
        return true;
    }

    changeTmpScale() {
        this.setState(prevState => ({
            celsius: !prevState.celsius
        }));
    }

    componentDidMount() {
        this.getWeather();
    }

    render() {
        return (
            <div className="local-weather jumbotron">
                <div className="row h1 justify-content-center">Local Weather</div>
                <hr className="p-5"/>
                <div className="row justify-content-center h4">
                    {this.state.data.name}
                </div>
                <WeatherIcon icon={this.state.data.weather[0].icon} />
                <div className="row justify-content-center h5">{this.state.data.weather[0].description}</div>
                <MainInfo CorF={this.state.celsius} celsius={this.state.data.main} fahrenheit={this.state.fahrenheit} />

                <div className="row justify-content-center mt-5">
                    <button type="button" className="btn btn-secondary" onClick={() => this.changeTmpScale()}>Change Temperature Scale</button>
                </div>

            </div>
        );
    }
}
