import React from "react";

export default function WeatherIcon(props) {
    return (
        <div className="row justify-content-center">
            {(props.icon !== "") && <img src={`http://openweathermap.org/img/w/${props.icon}.png`} />}
        </div>
    );
}
