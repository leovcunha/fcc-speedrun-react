import React, { Component } from "react";
import axios from "axios";
import CalcComp from "./calc-comp";
import "./calc.scss";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operation: "",
            display1: "0",
            ans: "0"
        };
    }
    componentDidMount() {
    }

    operationBuilder(char) {
        this.setState(prevState => {
            if (char === "+" || char === "-" || char === "*" || char === "/") {
                const operand = prevState.operation;
                console.log(operand);

                if (operand.endsWith("+") || operand.endsWith("-") || operand.endsWith("*") || operand.endsWith("/")) {
                    return ({ operation: operand.substring(0, operand.length - 1) + char });
                }
                if (this.state.ans !== "0") {
                    return ({
                        operation: this.state.ans + char,
                        display1: "0",
                        ans: "0"
                    });
                }
                return ({
                    operation: operand + char,
                    display1: "0"
                });
            } return ({
                operation: prevState.operation + char,
                display1: (prevState.display1 === "0" ? "" : prevState.display1) + char
            });
        });
    }
    operationClearer() {
        this.setState({ operation: "", display1: "0", ans: "0" });
    }

    operationSolver() {
        const operand = this.state.operation;
        const result = eval(operand.replace("%", "*(1/100)"));
        this.setState({ operation: result.toString(), display1: result.toString(), ans: result.toString() });
        // just because speedrun
    }

    rootSquare() {
        this.operationSolver();

        this.setState(prevState => {
            const result = Math.sqrt(parseFloat(prevState.display1));
            return ({ display1: result.toString(), ans: result.toString() });
        });
    }

    render() {
        return (
            <div className="calculator jumbotron">
                <div className="row h1 justify-content-center">Calculator</div>
                <hr className="p-5"/>
                <div className="calc row justify-content-center">
                    <table>
                        <tbody>
                            <tr>
                                <td className="display2" colSpan="4">{this.state.operation}</td>
                            </tr>
                            <tr>
                                <td className="display1" colSpan="4">{this.state.display1}</td>
                            </tr>
                            <tr>
                                <td colSpan="2" onClick={() => this.operationClearer()}>C</td>
                                <td onClick={() => this.rootSquare()}>&radic;</td>
                                <td onClick={() => this.operationBuilder("%")}>%</td>

                            </tr>
                            <tr>
                                <td onClick={() => this.operationBuilder("1")}>1</td>
                                <td onClick={() => this.operationBuilder("2")}>2</td>
                                <td onClick={() => this.operationBuilder("3")}>3</td>
                                <td onClick={() => this.operationBuilder("+")}>+</td>
                            </tr>
                            <tr>
                                <td onClick={() => this.operationBuilder("4")}>4</td>
                                <td onClick={() => this.operationBuilder("5")}>5</td>
                                <td onClick={() => this.operationBuilder("6")}>6</td>
                                <td onClick={() => this.operationBuilder("-")}>-</td>
                            </tr>
                            <tr>
                                <td onClick={() => this.operationBuilder("7")}>7</td>
                                <td onClick={() => this.operationBuilder("8")}>8</td>
                                <td onClick={() => this.operationBuilder("9")}>9</td>
                                <td onClick={() => this.operationBuilder("*")}>x</td>
                            </tr>
                            <tr>
                                <td onClick={() => this.operationBuilder("0")}>0</td>
                                <td onClick={() => this.operationBuilder(".")}>.</td>
                                <td onClick={() => this.operationSolver()}>=</td>
                                <td onClick={() => this.operationBuilder("/")}>/</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}
