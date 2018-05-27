import React, { Component } from "react";
import axios from "axios";

import "./tictactoe.scss";

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }


    render() {
        return (
            <div className="tictactoe jumbotron">
                <div className="row h1 justify-content-center">Tic Tac Toe</div>
                <hr className="p-5"/>
                <div className="gameboard row justify-content-center">
                    <table>
                        <tbody>
                            <tr>
                                <td onClick={() => this.operationBuilder("1")}>1</td>
                                <td onClick={() => this.operationBuilder("2")}>2</td>
                                <td onClick={() => this.operationBuilder("3")}>3</td>

                            </tr>
                            <tr>
                                <td onClick={() => this.operationBuilder("4")}>4</td>
                                <td onClick={() => this.operationBuilder("5")}>5</td>
                                <td onClick={() => this.operationBuilder("6")}>6</td>

                            </tr>
                            <tr>
                                <td onClick={() => this.operationBuilder("7")}>7</td>
                                <td onClick={() => this.operationBuilder("8")}>8</td>
                                <td onClick={() => this.operationBuilder("9")}>9</td>

                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}
