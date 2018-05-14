import React from "react";

import movieRecom from "./img/movie-recom.png";
import webNotes from "./img/web-notes.png";
import tributePage from "./img/tribute-page.png";
import empty from "./img/placeholder.png";


export default function Portfolio() {
    return (
        <div className="jumbotron portfolio">
            <h1 className="text-center"> Portfolio </h1>
            <div className="row">
                <div className="col">
                    <img className="w-100" src={movieRecom} />
                </div>
                <div className="col">
                    <img className="w-100" src={webNotes} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="w-100" src={tributePage} />
                </div>
                <div className="col">
                    <img className="w-100" src={empty} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="w-100" src={empty} />
                </div>
                <div className="col">
                    <img className="w-100" src={empty} />
                </div>
            </div>
        </div>
    );
}
