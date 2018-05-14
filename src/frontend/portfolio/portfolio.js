import React from "react";

export default function Portfolio() {
    return (
        <div className="jumbotron portfolio">
            <h1 className="text-center"> Portfolio </h1>
            <div class="row">
                <div class="col">
                  <img src="/img/movie-recom.png" />
                </div>
                <div class="col">
                  <img src="/img/web-notes.png" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                  <img src="/img/tribute-page.png" />
                </div>
                <div class="col">
                  <img src="/img/placeholder.png" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                  <img src="/img/placeholder.png" />
                </div>
                <div class="col">
                  <img src="/img/placeholder.png" />
                </div>
            </div>
        </div>
    );
}
