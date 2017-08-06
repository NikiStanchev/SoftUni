function attachEvents() {
    const baseUrl = 'https://judgetests.firebaseio.com/';
    $('#submit').click(loadForecast);

    function request(endpoint) {
        return $.ajax({
            method:'GET',
            url:baseUrl + endpoint
        })
    }

    function loadForecast() {
        request('locations.json')
            .then(displayLocations)
            .catch(handleError);
    }

    // AJAX GET all locations
    function displayLocations(data) {
        let inputLocation = $('#location').val();
        let code = data
            .filter(loc => loc['name'] === inputLocation)
            .map(loc => loc['code'])[0];

        if(!code){
            handleError();
        }
        let todayForecastP = request(`forecast/today/${code}.json `);
        let upcomingForecastP = request(`forecast/upcoming/${code}.json `);
        Promise.all([todayForecastP, upcomingForecastP])
            .then(displayAllForecastInfo)
            .catch(handleError);
    }

    function displayAllForecastInfo([todayWeather, upcommingWeather]) {
        let weatherSynbols = {
            'Sunny': '&#x2600;',
            'Partly sunny': '&#x26C5;',
            'Overcast': '&#x2601;',
            'Rain': '&#x2614'
        }

        let forecast = $('#forecast');
        forecast.css('display', 'block');
        displayToCurrent(todayWeather, weatherSynbols);
        displayToUpcoming(upcommingWeather, weatherSynbols);
    }
    
    function displayToCurrent(todayWeather, weatherSynbols) {
        let current = $('#current');
        current.empty();
        current.append($('<div class="label">Current conditions</div>'))
            .append($(`<span class="condition symbol">${weatherSynbols[todayWeather['forecast']['condition']]}</span>`))
            .append($('<span class="condition"></span>')
                .append($(`<span class="forecast-data">${todayWeather['name']}</span>`))
                .append($(`<span class="forecast-data">${todayWeather['forecast']['low']}&#176;/${todayWeather['forecast']['high']}&#176;</span>`))
                .append($(`<span class="forecast-data">${todayWeather['forecast']['condition']}</span>`)));
    }
    
    function displayToUpcoming(upcommingWeather, weatherSynbols) {
        let upcoming = $('#upcoming');
        upcoming.empty();
        upcoming.append($('<div class="label">Three-day forecast</div>'));

        let data = upcommingWeather['forecast'];
        for(let info of data){
            upcoming
                .append($('<span class="upcoming"></span>')
                    .append($(`<span class="symbol">${weatherSynbols[info['condition']]}</span>`))
                    .append($(`<span class="forecast-data">${info['low']}&#176;/${info['high']}&#176;</span>`))
                    .append($(`<span class="forecast-data">${info['condition']}</span>`)));
        }

    }

    function handleError(reason) {
        let forecast = $('#forecast');
        forecast.css('display', 'block');
        forecast.text('Error');
    }
}