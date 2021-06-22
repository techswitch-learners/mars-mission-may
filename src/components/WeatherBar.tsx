import React from 'react';

function WeatherBar() {

    fetch("https://api.nasa.gov/insight_weather/?api_key=qgwx3Qy7G2u3W1f27t3vVc1g2txXuwsJvoOEm3hx&feedtype=json&ver=1.0")
        .then(response => response.json())
        .then(body => console.log(body));


    return (
        <div className="y">
            hello
        </div>
    );
}

export { WeatherBar }
