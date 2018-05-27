import React, { Component } from "react";
import axios from "axios";
import "./pomodoro.scss";


export default class Pomodoro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 1500000,
            break: 300000,
            timerActive: false,
            breakActive: false
        };
        this.timerId = "";
    }


    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        if (this.state.timer === 0 && this.state.timerActive) {
            window.alert(`Time's up! Now rest for ${this.getMinutes(this.state.break)} minutes`);
            this.setState(prevState => ({
                timerActive: false,
                breakActive: true,
                break: prevState.break - 1000
            }));
            return;
        }
        if (this.state.breakActive) {
            this.setState(prevState => ({ break: prevState.break - 1000 }));
            if (this.state.break === 0) {
                window.alert("Pomodoro complete");
                this.resetTimer();
            }
        }
        if (this.state.timerActive) {
            this.setState(prevState => ({ timer: prevState.timer - 1000 }));
        }
    }
    plusTime() {
        if (this.state.timer >= 3000000) {
            window.alert("maximum reached");
            return;
        }
        this.setState(prevState => ({ timer: prevState.timer + 60000 }));
    }
    lessTime() {
        if (this.state.timer <= 60000) {
            window.alert("minimum reached");
            return;
        }
        this.setState(prevState => ({ timer: prevState.timer - 60000 }));
    }
    plusBreak() {
        if (this.state.break >= 600000) {
            window.alert("maximum reached");
            return;
        }
        this.setState(prevState => ({ break: prevState.break + 60000 }));
    }
    lessBreak() {
        if (this.state.break <= 60000) {
            window.alert("minimum reached");
            return;
        }
        this.setState(prevState => ({ break: prevState.break - 60000 }));
    }
    startTimer() {
        if (!this.state.timerActive) {
            this.timerId = setInterval(() => this.tick(), 1000);
            this.setState({ timerActive: true });
        }
    }
    resetTimer() {
        clearInterval(this.timerId);
        this.setState({
            timer: 1500000,
            break: 300000,
            timerActive: false,
            breakActive: false
        });
    }
    getMinutes(n) {
        const min = Math.floor((n % (1000 * 60 * 60)) / (1000 * 60));
        return min;
    }
    getSeconds(n) {
        const sec = Math.floor((n % (1000 * 60)) / 1000);
        return (sec < 10) ? (`0${sec}`) : sec;
    }
    render() {
        return (
            <div className="pomodoro jumbotron">
                <div className="row h1 justify-content-center">Pomodoro Clock</div>
                <hr className="p-5"/>
                <div className="row justify-content-around">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={() => this.lessTime()}>-</button>
                        <button type="button" className="btn btn-danger">Timer</button>
                        <button type="button" className="btn btn-danger" onClick={() => this.plusTime()}>+</button>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={() => this.lessBreak()}>-</button>
                        <button type="button" className="btn btn-danger">Break</button>
                        <button type="button" className="btn btn-danger" onClick={() => this.plusBreak()}>+</button>
                    </div>
                </div>
                <div className="row timer justify-content-center">
                    {`${this.getMinutes(this.state.timer)}
                    :${this.getSeconds(this.state.timer)}`}</div>
                <div className="row h1 justify-content-center">
                    {`${this.getMinutes(this.state.break)}
                    :${this.getSeconds(this.state.break)}`}</div>
                <div className="row justify-content-center">
                    <button type="button" className="btn btn-danger" onClick={() => this.startTimer() }>
                    Start
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => this.resetTimer() }>
                    Reset
                    </button>
                </div>
            </div>
        );
    }
}
