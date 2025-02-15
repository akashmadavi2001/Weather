const apikey = '123456789*************';  // Your apikey
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/hr';

    if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "./img/clear-sky.png";
    } 
    else if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "./img/cloud.svg";
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "./img/mist.svg";
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "./img/drizzle.svg";
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "./img/rain.svg";
    }
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})