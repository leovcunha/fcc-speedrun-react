import React, { Component } from "react";
import axios from "axios";

import "./simon.scss";


export default class SimonGame extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }


    componentDidUpdate(prevProps, prevState) {

    }


    render() {
        return (
            <div className="simon jumbotron">
                <div className="row h1 justify-content-center">Simon Game</div>
                <hr className="p-5"/>
                <table>
                    <tbody>
                        <tr>
                            <td className="topleft" >1</td>
                            <td className="topright">2</td>
                        </tr>
                        <tr>
                            <td className="bottomleft">3</td>
                            <td className="bottomright">4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
