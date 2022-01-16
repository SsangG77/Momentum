
API_KEY = "0053b997aaa002d7cf4f829b74c3ccc5";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = "weather: " + data.weather[0].main;
        city.innerText = "City: " + data.name;

    });
};

function onGeoError() {
    alert("I can`t find your location.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);