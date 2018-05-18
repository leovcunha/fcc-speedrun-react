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
                name: ""
            },
            celsius: true

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
                    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.position.latitude}&lon=${this.state.position.longitude}&appid=663256a5a9993f3aa5e9f557920e8f24`)
                        .then(res => this.setState({ data: res.data })))
                .then(() => {
                    this.setState({
                        fahrenheit: {
                            temp: (this.state.data.main.temp * (9 / 5)) + 32,
                            temp_min: (this.state.data.main.temp_min * (9 / 5)) + 32,
                            temp_max: (this.state.data.main.temp_max * (9 / 5)) + 32
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
        const helper = this.state.celsius;
        this.setState({ celsius: !helper });
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
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"
                            onSelect={() => this.changeTmpScale}/>
                        <label className="custom-control-label mr-5" for="customRadio1">Celsius</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input ml-5"
                            onSelect={() => this.changeTmpScale}/>/>
                        <label className="custom-control-label" for="customRadio2">Fahrenheit</label>
                    </div>
                </div>

            </div>
        );
    }
}
