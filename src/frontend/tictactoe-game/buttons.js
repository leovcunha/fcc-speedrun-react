import React from "react";

export default function Buttons(props) {
	const gamestarted = props.gamestarted;
    return (
    	<div>{ !gamestarted &&
    	<div className="buttons">
            <div className="row justify-content-center">
                <h2>Choose your Mark!</h2>
            </div>
            <div className="row justify-content-center">
                <button className="btn btn-primary" onClick={() => props.gamestart('X')}>X</button>
                <button className="btn btn-primary" onClick={() => props.gamestart('O')}>O</button>
            </div>
        </div> }
        </div>
    );
}