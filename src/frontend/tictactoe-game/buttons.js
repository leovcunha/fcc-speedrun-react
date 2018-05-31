import React from "react";

export default function Buttons(props) {
    const gamestarted = props.gamestarted;
    return (
    	<div>{ !gamestarted &&
    	<div className="buttons">
    	    <div className="row justify-content-center mb-5">
    	        <h2>Choose your Mark!</h2>
    	    </div>
    	    <div className="row justify-content-center">
    	        <button className="btn btn-primary mr-2" onClick={() => props.gamestart("X")}>X</button>
    	        <button className="btn btn-primary ml-2" onClick={() => props.gamestart("O")}>O</button>
    	    </div>
    	</div> }
        </div>
    );
}
