const apiKey = '7ac890a008e27eb6e935c7b0e429eba5'
const getWeatherBtn = document.getElementById('getWeather');
const cityInput = document.getElementById('city');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const windSpeed = document.getElementById('windSpeed');
const error = document.getElementById('error');

getWeatherBtn.addEventListener('click', function() {
    const city = cityInput.value.trim();

    if (!city) {
        error.textContent = 'Please enter a city name.';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                cityName.textContent = `City: ${data.name}, ${data.sys.country}`;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
                windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                error.textContent = '';
            } else {
                error.textContent = 'City not found, please try again.';
                cityName.textContent = '';
                temperature.textContent = '';
                weatherDescription.textContent = '';
                windSpeed.textContent = '';
            }
        })
        .catch(err => {
            error.textContent = 'Failed to fetch data. Please check your connection.';
            console.error(err);
        });
});




