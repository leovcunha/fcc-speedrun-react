import React, { Component } from "react";
import axios from "axios";
import CalcComp from "./calc-comp";
import "./calc.scss";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }


    render() {
        return (
            <div className="calculator jumbotron">
                <div className="row h1 justify-content-center">Calculator</div>
                <hr className="p-5"/>

            </div>
        );
    }
}
