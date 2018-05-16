import React, { Component } from "react";
import { Header, Content, Sidebar } from "./webpage";

export default class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Sidebar/>
                    <Content/>
                </div>
            </div>
        );
    }
}