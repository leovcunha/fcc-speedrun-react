import React from "react";

export default function MainInfo(props) {
    return (

        <div>

            <div className="row justify-content-center h5"> Temperature is:  {props.CorF ?
                (<h5>{parseFloat(props.celsius.temp - 273.00).toFixed(1)} C</h5>) : (<h5>{parseFloat(props.fahrenheit.temp).toFixed(1)} F</h5>) }
            </div>
            <div className="row justify-content-center h5"> Max:  {props.CorF ?
                <h5>{parseFloat(props.celsius.temp_max - 273.00).toFixed(1)} C</h5> : <h5>{parseFloat(props.fahrenheit.temp_max).toFixed(1)} F</h5> }
            </div>
            <div className="row justify-content-center h5"> Min:  {props.CorF ?
                (<h5>{parseFloat(props.celsius.temp_min - 273.00).toFixed(1)} C</h5>) : (<h5>{parseFloat(props.fahrenheit.temp_min).toFixed(1)} F</h5>) }
            </div>

        </div>

    );
}
