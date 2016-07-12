var APPID = "80341d69375e56322835d5bd041bf7e5";
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



function update(forecast) {
    temp.innerHTML = list[0].temp;
    temp2.innerHTML = list[1].temp;
    loc.innerHTML = city.name;
    loc2.innerHTML = city.name;
    humidity.innerHTML = list[0].humidity;
    humidity2.innerHTML = list[1].humidity;
    wind.innerHTML = list[0].speed;
    wind2.innerHTML = list[1].speed;
    direction.innerHTML = list[0].deg;
    direction2.innerHTML = list[1].deg
    icon.src = "assets/img/" + list[0].weather.icon + ".png";
    icon2.src = "assets/img/" + list[1].weather.icon + ".png";

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

  update(forecast);
}
