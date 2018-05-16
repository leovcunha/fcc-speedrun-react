import React, { Component }  from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.setTitle =  this.setTitle.bind(this);
        this.state = {
            title: ""
        };
    }

    setTitle(newTitle) {
        this.setState(
            {title: newTitle}
        );
    }

    render () {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1>{this.state.title}</h1>
                </nav>
            </div>
        );
    }
}
