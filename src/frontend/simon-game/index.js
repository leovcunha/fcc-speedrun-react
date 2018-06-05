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

        this.buttonPress = this.buttonPress.bind(this);
        this.state = {
            start: false,
            displayText: "START",
            gameSequence: [],
            steps: 1,
            playerSequence: [],
            lightUp: 0,
            strict: false,

        };
    }


    componentDidUpdate(prevProps, prevState) {
        if ((this.state.steps > prevState.steps) && this.state.steps < 11) {
            setTimeout(() => this.playGameSequence(this.state.steps), 2000);
        } else if (this.state.steps === 6 && prevState.steps === 10) {
            this.setState({ displayText: "Victory" });
            setTimeout(() => this.buttonPress(1), 500);
            setTimeout(() => this.buttonPress(2), 1000);
            setTimeout(() => this.buttonPress(3), 1500);
            setTimeout(() => this.buttonPress(4), 2000);
        }
    }

    startGame() {
        if (!this.state.start) {
            this.setState({
                start: true,
                displayText: this.state.steps < 10 ? `0${this.state.steps}` : `${this.state.steps}`,
            }, () => this.playGameSequence(this.state.steps));
        } else {
            this.setState({
                start: false,
                displayText: "START",
                gameSequence: [],
                playerSequence: [],
                steps: 1,
                lightUp: 0,
            });
        }
    }

    lightbuttonUp(number) {
        setTimeout(() => this.setState({ lightUp: number }), 1);
        setTimeout(() => this.setState({ lightUp: 0 }), 350);
    }


    buttonPress(n, player = false) {
        if (this.state.start) {
            switch (n) {
            case 1:
                this.a1.play();
                break;
            case 2:
                this.a2.play();
                break;
            case 3:
                this.a3.play();
                break;
            case 4:
                this.a4.play();
                break;
            default:
                console.log("error");
                break;
            }

            this.lightbuttonUp(n);

            if (player) {
                const seq = this.state.playerSequence.slice();
                seq.push(n);

                if (this.matchSequence(seq)) {
                    if (seq.length < this.state.gameSequence.length) this.setState({ playerSequence: seq });
                    else if (seq.length === this.state.gameSequence.length) {
                        this.setState(prevState => {
                            const inc = prevState.steps + 1;
                            return { steps: inc, playerSequence: [], displayText: inc < 10 ? `0${inc}` : `${inc}` };
                        });
                    }
                } else {
                    setTimeout(() => this.setState({ displayText: "!!", playerSequence: [] }), 1);
                    setTimeout(() => this.setState({ displayText: this.state.steps < 10 ? `0${this.state.steps}` : `${this.state.steps}` }), 2000);
                    setTimeout(() => this.playGameSequence(this.state.steps), 2000);
                }
            }
        }
    }

    playGameSequence(nSteps) {
        const seq = this.state.gameSequence.slice();

        if (nSteps > seq.length) {
            const choice = Math.floor(Math.random() * (4 - 1)) + 1;
            seq.push(choice);
            this.setState({ gameSequence: seq });
        }

        seq.forEach((el, i, ar) => setTimeout(() => this.buttonPress(el), i * 750), this);
    }

    matchSequence(playerSeq) {
        const comparison = playerSeq.map((el, i, ar) => el === this.state.gameSequence[i]).reduce((acc, el) => acc && el);

        return (comparison);
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
                                    onClick={() => this.buttonPress(1, true)}>1</td>
                                <td className="topright" style={this.state.lightUp === 2 ? { opacity: 0.6 } : { opacity: 1 }}
                                    onClick={() => this.buttonPress(2, true)}>2</td>
                            </tr>
                            <tr>
                                <td className="bottomleft" style={this.state.lightUp === 3 ? { opacity: 0.6 } : { opacity: 1 }}
                                    onClick={() => this.buttonPress(3, true)}>3</td>
                                <td className="bottomright" style={this.state.lightUp === 4 ? { opacity: 0.6 } : { opacity: 1 }}
                                    onClick={() => this.buttonPress(4, true)}>4</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="central-panel justify-content-center">
                        <span className="title-panel">SIMON</span>
                        <button type="button" className="button-panel btn btn-dark" onClick={() => this.startGame()}>{this.state.displayText}</button>
                        <div className="strict-hold d-inline-block">
                            <button type="button" className="strict btn btn-danger" data-toggle="button" aria-pressed="false" autoComplete="off">
                            </button>
                            <small className="text-muted">strict</small>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
