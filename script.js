const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0a3554cdf4msh7c8232fccb18576p12143fjsn3115535164b7',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

    // Define the function to fetch weather data for a specific city
    const getWeather = (city) => {
        // Define the DOM elements to update
        const cityName = document.getElementById('cityName');
        const cloud_pct = document.getElementById('cloud_pct');
        const temp = document.getElementById('temp');
        const feels_like = document.getElementById('feels_like');
        const humidity = document.getElementById('humidity');
        const min_temp = document.getElementById('min_temp');
        const max_temp = document.getElementById('max_temp');
        const wind_speed = document.getElementById('wind_speed');
        const wind_degrees = document.getElementById('wind_degrees');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');

        // Update the city name in the heading
        cityName.innerHTML = city;

        // Fetch weather data for the specified city
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                // Update the DOM elements with the weather data
                cloud_pct.innerHTML = response.cloud_pct;
                temp.innerHTML = response.temp;
                feels_like.innerHTML = response.feels_like;
                humidity.innerHTML = response.humidity;
                min_temp.innerHTML = response.min_temp;
                max_temp.innerHTML = response.max_temp;
                wind_speed.innerHTML = response.wind_speed;
                wind_degrees.innerHTML = response.wind_degrees;
                sunrise.innerHTML = response.sunrise;
                sunset.innerHTML = response.sunset;
            })
            .catch(err => console.error(err));
    };

    // Define an array of common places
    const commonPlaces = ['Tamilnadu', 'Shanghai', 'Kerala', 'Dubai', 'Kolkata', 'jammu'];

    // Define the function to fetch weather data for common places
    const getCommonPlacesWeather = () => {
        // Loop through the common places and fetch weather data for each
        commonPlaces.forEach(place => {
            fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${place}`, options)
                .then(response => response.json())
                .then((response) => {
                    console.log(`Weather data for ${place}:`, response);
                    // Update the table with the weather data for the current place
                    updateTable(place, response);
                })
                .catch(err => console.error(err));
        });
    };

    // Define the function to update the table with weather data for a specific place
    const updateTable = (place, data) => {
        // Find the table row corresponding to the current place
        const row = document.getElementById(place);
        if (row) {
            // Update the table cells with the weather data
            row.querySelector('.cloud_pct').innerHTML = data.cloud_pct;
            row.querySelector('.feels_like').innerHTML = data.feels_like;
            row.querySelector('.humidity').innerHTML = data.humidity;
            row.querySelector('.max_temp').innerHTML = data.max_temp;
            row.querySelector('.min_temp').innerHTML = data.min_temp;
            row.querySelector('.sunrise').innerHTML = data.sunrise;
            row.querySelector('.sunset').innerHTML = data.sunset;
            row.querySelector('.temp').innerHTML = data.temp;
            row.querySelector('.wind_degrees').innerHTML = data.wind_degrees;
            row.querySelector('.wind_speed').innerHTML = data.wind_speed;
        }
    };

    // Add event listener to the search form
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        const city = document.getElementById('city').value;
        getWeather(city);
    });

    // Call the functions to fetch weather data for Delhi (default) and common places
    getWeather('Delhi');
    getCommonPlacesWeather();

