import React, { Component } from "react";
import axios from "axios";


export default class MDPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="md-previewer jumbotron">
                <div className="row h1 justify-content-center">Markdown Previewer</div>
                <hr className="p-5"/>
            </div>
        );
    }
}
