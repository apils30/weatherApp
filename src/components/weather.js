import React from "react";


const Weather = props => (
        <div>
            { props.city && 
                <div>
                    <div>Location: {props.city}, {props.country}</div>
                    <div>Temperature: {props.temp}</div>
                    <div>Pressure: {props.pressure}</div>
                    <div>Sunset: {props.sunset}</div>
                </div>
            }    
            <div>
                {props.error}
            </div>   
        </div>
);


export default Weather;