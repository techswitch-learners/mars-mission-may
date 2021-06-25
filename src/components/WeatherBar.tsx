import "../styles/WeatherBar.scss";
export function WeatherBar() {

    return (
        <div data-testid='weather-banner'>
            <h2 className='weather-banner'> -80°C Sunny on Mars </h2>
        </div>
    );
}