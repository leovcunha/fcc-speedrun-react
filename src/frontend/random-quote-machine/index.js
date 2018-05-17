import React, { Component } from "react";
import axios from "axios";
import "./rqm.scss";


export default class RandomQuoteMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteData: "",
            divStyle: { background: "salmon" }
        };
    }
    render() {
        return (
            <div className="random-quote-machine jumbotron" style={ this.state.divStyle }>
                <div className="row h1 justify-content-center">The Simpsons Random Quote Machine</div>
                <hr className="p-5"/>
                <div className="row justify-content-center">
                    <img className="w-25 h-25" src={this.state.quoteData.image} />
                </div>
                <div className="row justify-content-center">{this.state.quoteData.quote}</div>
                <div className="row justify-content-center">
                    <a class="twitter-share-button btn btn-primary"
                        href={`https://twitter.com/intent/tweet?text=${this.state.quoteData.quote}`}
                        data-size="large">
                    Tweet</a>
                    <button className="getquote btn btn-primary" onClick={() =>
                        axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
                            .then(response => {
                                this.setState({
                                    quoteData: response.data[0],
                                    divStyle: { background: `#${Math.floor(Math.random() * 16777215).toString(16)}` }
                                });
                            })
                    }>Get inspired</button>
                </div>
            </div>
        );
    }
}
