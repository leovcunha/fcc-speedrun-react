import React from "react";

export default function WikiCard(props) {
    return (
        <div className="col-sm-6 mb-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.snippet}</p>
                    <button className="btn btn-secondary"
                        onClick={() => window.open(`http://en.wikipedia.org/wiki/${props.title.replace(/\s+/g, "_")}`)}>Go there</button>
                </div>
            </div>
        </div>

    );
}

