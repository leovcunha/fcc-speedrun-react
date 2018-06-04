import React, { Component } from "react";
import axios from "axios";

import "./simon.scss";


export default class SimonGame extends Component {
    constructor(props) {
        super(props);

        this.a1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
        this.a2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
        this.a3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
        this.a4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
        this.state = {
            start: false,
            displayText: "START",
            sequence: [],
            lightUp: 0


        };
    }


    componentDidUpdate(prevProps, prevState) {

    }
    startGame() {
        if (!this.state.start) {
            this.setState({
                start: true,
                displayText: "--"
            });
        } else {
            this.setState({
                start: false,
                displayText: "START"
            });
        }
    }

    lightbuttonUp(number) {
        setTimeout(() => this.setState({ lightUp: number }), 1);
        setTimeout(() => this.setState({ lightUp: 0 }), 350);
    }

    buttonPress(snd, n) {
        console.log(this.state.start);
        if (this.state.start) {
            snd.play();
            this.lightbuttonUp(n);
        }
    }

    render() {
        return (
            <div className="simon jumbotron">
                <div className="row h1 justify-content-center">Simon Game</div>
                <hr className="p-5"/>
                <div className="gamepad row justify-content-center">
                    <table>
                        <tbody>
                            <tr>
                                <td className="topleft" style={this.state.lightUp === 1 ? { opacity: 0.6 } : { opacity: 1 }}
                                    onClick={() => this.buttonPress(this.a1, 1)}>1</td>
                                <td className="topright" style={this.state.lightUp === 2 ? { opacity: 0.6 } : { opacity: 1 }}
                                    onClick={() => this.buttonPress(this.a2, 2)}>2</td>
                            </tr>
                            <tr>
                                <td className="bottomleft" style={this.state.lightUp === 3 ? { opacity: 0.6 } : { opacity: 1 }}
                                    onClick={() => this.buttonPress(this.a3, 3)}>3</td>
                                <td className="bottomright" style={this.state.lightUp === 4 ? { opacity: 0.6 } : { opacity: 1 }}
                                    onClick={() => this.buttonPress(this.a4, 4)}>4</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="central-panel justify-content-center">
                        <span className="title-panel">SIMON</span>
                        <button type="button" className="button-panel btn btn-dark" onClick={() => this.startGame()}>{this.state.displayText}</button>
                    </div>
                </div>
            </div>
        );
    }
}
