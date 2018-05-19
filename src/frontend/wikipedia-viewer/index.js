import React, { Component } from "react";
import axios from "axios";
import "./wikipedia-viewer.scss";


export default class WikipediaViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        console.log(this.state.data);
        return (
            <div className="wikipedia-viewer jumbotron">
                <div className="row h1 justify-content-center">Wikipedia Viewerr</div>
                <hr className="p-5"/>
                <div className="row justify-content-center h4">
                    {this.state.data.name}
                </div>

            </div>
        );
    }
}
