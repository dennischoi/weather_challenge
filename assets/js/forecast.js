var APPID = "80341d69375e56322835d5bd041bf7e5";
var forecast = [];
var day;
var loc;
var icon;
var humidity;
var wind;
var temp;
var direction;
// SECOND DAY
var loc2;
var icon2;
var humidity2;
var wind2;
var temp2;
var direction2;




function updateByPlace(place) {
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?" +
      "q=" + place +
      "&mode=json&units=metric" +
      // PRONE TO CHANGE FROM 2 to 7
      "&cnt=2" +
      "&APPID=" + APPID;
    sendRequest(url)
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var forecast = {};
            forecast.icon = data.list[0].weather[0].icon;
            forecast.icon2 = data.list[1].weather[0].icon;
            forecast.temp = data.list[0].temp.day;
            forecast.temp2 = data.list[1].temp.day;
            forecast.name = data.city.name;
            forecast.name2 = data.city.name;
            forecast.humidity = data.list[0].humidity;
            forecast.humidity2 = data.list[1].humidity;
            forecast.speed = data.list[0].speed;
            forecast.speed2 = data.list[1].speed;
            forecast.deg = data.list[0].deg;
            forecast.deg2 = data.list[1].deg;

            update(forecast)
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


// PRONE TO CHANGE...
function update(forecast) {
    temp.innerHTML = roundTemp(forecast.temp);
    temp2.innerHTML = roundTemp(forecast.temp2);
    loc.innerHTML = forecast.name;
    loc2.innerHTML = forecast.name2;
    humidity.innerHTML = forecast.humidity;
    humidity2.innerHTML = forecast.humidity2;
    wind.innerHTML = forecast.speed;
    wind2.innerHTML = forecast.speed2;
    direction.innerHTML = compassDirection(forecast.deg);
    direction2.innerHTML = compassDirection(forecast.deg2);
    icon.src = "assets/img/" + forecast.icon + ".png";
    icon2.src = "assets/img/" + forecast.icon2 + ".png";

}

function roundTemp(t) {
    return Math.round(t);
}

function compassDirection(degree) {
    var range = 360/8;
    var low = 360 - range/2;
    var high = (low + range) % 360;
    var angles = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    for (i in angles) {
        if (degree >= low && degree < high)
            return angles[i];
        low = (low + range) % 360;
        high = (high + range) % 360;
    }
}

window.onload = function() {
  loc = document.getElementById('location')
  icon = document.getElementById('icon')
  humidity = document.getElementById('humidity')
  wind = document.getElementById('wind')
  direction = document.getElementById('direction')
  temp = document.getElementById('temperature')

  loc2 = document.getElementById('location2')
  icon2 = document.getElementById('icon2')
  humidity2 = document.getElementById('humidity2')
  wind2 = document.getElementById('wind2')
  direction2 = document.getElementById('direction2')
  temp2 = document.getElementById('temperature2')



  updateByPlace("London");
}
