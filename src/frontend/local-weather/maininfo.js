import React from "react";

export default function MainInfo(props) {
    return (
        <div>{ props.celsius !== "undefined" && (
            <div>

                <div className="row justify-content-center h5"> Temperature is: {props.CorF ?
                    (<h5>{props.celsius.temp}</h5>) : (<h5>{props.fahrenheit.temp}</h5>) }
                </div>
                <div className="row justify-content-center h5"> Max: {props.CorF ?
                    <h5>{props.celsius.temp_max}</h5> : <h5>{props.fahrenheit.temp_max}</h5> }
                </div>
                <div className="row justify-content-center h5"> Min: {props.CorF ?
                    <h5>{props.celsius.temp_min}</h5> : <h5>{props.fahrenheit.temp_min}</h5> }</div>
                <div className="row justify-content-center h5"> Humidity: {this.state.data.main.humidity}</div>

            </div>) }</div>
    );
}
