import './CurrentWeather.css';

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Belgrade</p>
        <p className="weather-description">Rainy</p>
      </div>
      <img alt="weather" className="weather-icon" src="icons/10d.png" />
    </div>
  );
};

export default CurrentWeather;
