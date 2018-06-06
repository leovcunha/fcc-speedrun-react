import React, { Component } from "react";
import axios from "axios";
import marked from "marked"


import './md-previewer.scss'

export default class MDPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n",
            marked: ""

        };
    }

    componentDidMount() {
        this.setState({ marked: marked(this.state.text) });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.text !== prevState.text) {
            this.setState({ marked: marked(this.state.text, {sanitize: true}) });
        }
    }

    handleChange() {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div className="md-previewer jumbotron">
                <div className="row h1 justify-content-center">Markdown Previewer</div>
                <hr className="p-3"/>
                <div className="row">
                    <div className="col-sm-6">
                    <textarea value={this.state.text} onChange={() => this.handleChange()} />
                    </div>
                    <div className="col-sm-6" dangerouslySetInnerHTML={{__html: this.state.marked}}></div>
                </div>
            </div>
        );
    }
}
