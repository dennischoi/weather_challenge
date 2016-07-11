var APPID = "80341d69375e56322835d5bd041bf7e5";
var day;
var loc;
var icon;
var humidity;
var wind;
var temp;
var direction;

function updateZip(zip) {
    var url = "http://api.openweather.org/data/2.5/weather?" +
      "zip=" + zip +
      "%APPID=" + APPID;
    sendRequest(url)
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.icon = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.direction = data.wind.deg;
            weather.loc = data.name;
            weather.temp = data.main.temp;

            update(weather);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function update(weather) {
    loc.innerHTML = weather.loc;
    icon.src = "assets/img/" + weather.icon + ".png";
    humidity.innerHTML = weather.humidity;
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    temp.innerHtml = weather.temp;
}

window.onload = function() {
    loc = document.getElementById('location')
    icon = document.getElementById('icon')
    humidity = document.getElementById('humidity')
    wind = document.getElementById('wind')
    direction = document.getElementById('direction')
    temp = document.getElementById('temperature')

}
