class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
    this.maxTemp = document.getElementById('w-max-temp');
    this.minTemp = document.getElementById('w-min-temp');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + '\xB0C';
    const iconCode = weather.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`
    this.icon.setAttribute('src', iconUrl);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    const windDirText = function (degree) {
      if ((degree > 337.5 && degree < 360) || (degree > 22.5 && degree < 22.5)) {
        return 'North';
      } else if (degree > 22.5 && degree < 67.5) {
        return 'North East';
      } else if (degree > 67.5 && degree < 112.5) {
        return 'East';
      } else if (degree > 122.5 && degree < 157.5) {
        return 'South East';
      } else if (degree > 157.5 && degree < 202.5) {
        return 'South';
      } else if (degree > 202.5 && degree < 247.5) {
        return 'South West';
      } else if (degree > 247.5 && degree < 292.5) {
        return 'West';
      } else if (degree > 292.5 && degree < 337.5) {
        return 'North West';
      }
    }
    if (weather.wind.deg === undefined) {
      this.wind.textContent = `Wind Speed: ${weather.wind.speed}m/s`;
    } else {
      this.wind.textContent = `Wind: From the ${windDirText(weather.wind.deg)} at ${weather.wind.speed}m/s`;
    }
    this.maxTemp.textContent = `Max Temp: ${weather.main.temp_max} \xB0C`;
    this.minTemp.textContent = `Min Temp: ${weather.main.temp_min} \xB0C`;
  }
}