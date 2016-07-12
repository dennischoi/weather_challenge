var APPID = "80341d69375e56322835d5bd041bf7e5";
var day;
var loc;
var icon;
var humidity;
var wind;
var temp;
var direction;

function updateById(id) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
      "id=" + id +
      "&APPID=" + APPID;
    sendRequest(url)
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.icon = data.weather[0].id;
            // DETERMINE WHICH ICON IS USED
            // THUNDERSTORM
              if (weather.icon == 200 || 201 || 202 || 210 || 211 || 212 || 221 || 230 || 231 || 232) {
                weather.icon ='11d'
            // DRIZZLE
              }else if (weather.icon == 300 || 301 || 302 || 310 || 311 || 312 || 313 || 314 || 321) {
                weather.icon = '09d'
            //  RAIN
              }else if (weather.icon == 500 || 501 || 502 || 503 || 504) {
                weather.icon = '10d'
              }else if (weather.icon == 511) {
                weather.icon = '13d'
              }else if (weather.icon == 520 || 521 || 522 || 531) {
                weather.icon = '09d'
            //  SNOW
              }else if (weather.icon == 600 || 601 || 602 || 611 || 612 || 615 || 616 || 620 || 621 || 622) {
                weather.icon = '13d'
            //  ATMOSPHERE
              }else if (weather.icon == 701 || 711 || 721 || 731 || 741 || 751 || 761 || 762 || 771 || 781) {
                weather.icon = '50d'
            // CLEAR & CLOUDS
              }else if (weather.icon == 800) {
                weather.icon = '01d'
              }else if (weather.icon == 801) {
                weather.icon = '02d'
              }else if (weather.icon == 802) {
                weather.icon = '03d'
              }else if (weather.icon == 803 || 804) {
                weather.icon = '04d'
              }

            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.direction = compassDirection(data.wind.deg);
            weather.loc = data.name;
            weather.temp = kelvinToCelcius(data.main.temp);

            update(weather);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function kelvinToCelcius(k) {
    return Math.round(k - 273.15);
}

function compassDirection(degree) {
  var range = 360/8;
  var low = 360 - range/2;
  var high = low + range % 360;
  var angles = [ "N", "NE", "E", "SE", "S", "SW", "W", "NW"]

  for (i in angles) {
    if (degree >= low && degree < high)
      return angles[i];

    low = (low + range) % 360;
    high = (high + range) % 360;
  }
  return "N";
}


function update(weather) {
    loc.innerHTML = weather.loc;
    icon.src = "assets/img/" + weather.icon + ".png";
    humidity.innerHTML = weather.humidity;
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    temp.innerHTML = weather.temp;
}



window.onload = function() {
    loc = document.getElementById('location')
    icon = document.getElementById('icon')
    humidity = document.getElementById('humidity')
    wind = document.getElementById('wind')
    direction = document.getElementById('direction')
    temp = document.getElementById('temperature')

    updateById(6167865)


}
