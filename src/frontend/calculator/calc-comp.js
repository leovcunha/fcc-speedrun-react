
import React from "react";

export default function CalcComp(props) {
    const currently = props.stream === null ? "offline" : "online";
    const color = currently === "online" ? "green" : "red";
    return (

        <div className="card mb-3">
            <img className="card-img-left" src={props.logo} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <a href={props.url} target="_blank" className="card-text">{props.status}</a>
                <p className="card-text"><small className="currently" style={{ color: `${color}` }}>{currently}</small></p>
            </div>
        </div>

    );
}

