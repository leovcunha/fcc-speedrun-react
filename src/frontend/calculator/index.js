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
                <div className="calc row justify-content-center">
                    <table>
                        <tr>
                        <td className="display2" colspan="4">display</td>
                        </tr>
                        <tr>
                        <td className="display1" colspan="4">display</td>
                        </tr>
                        <tr>
                            <td colspan="2">C</td>
                            <td>&radic;</td>
                            <td>%</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>.</td>
                            <td>=</td>
                            <td>/</td>
                        </tr>

                    </table>
                </div>

            </div>
        );
    }
}
