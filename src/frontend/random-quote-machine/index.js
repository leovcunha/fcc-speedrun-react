import React from "react";
import "./rqm.scss"

import axios from "axios";

export default function RandomQuoteMachine() {

    let quote = "";
    return (
        <div className="random-quote-machine">
            <div>{quote.quote}</div>
            <button className="btn btn-primary" onClick={() =>
                axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
                .then((response) => quote = response)
            }>Get inspired</button>
        </div>
    );
}
