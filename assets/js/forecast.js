var APPID = "80341d69375e56322835d5bd041bf7e5";
var forecast = [];
var avgPressure;
// FIRST DAY
var loc; var icon; var main; var descript; var humidity; var wind; var temp; var direction;
// SECOND DAY
var icon2; var main2; var descript2; var humidity2; var wind2; var temp2; var direction2;
// THIRD DAY
var icon3; var main3; var descript3; var humidity3; var wind3; var temp3; var direction3;
// FOURTH DAY
var icon4; var main4; var descript4; var humidity4; var wind4; var temp4; var direction4;
// FIFTH DAY
var icon5; var main5; var descript5; var humidity5; var wind5; var temp5; var direction5;
// SIXTH DAY
var icon6; var main6; var descript6; var humidity6; var wind6; var temp6; var direction6;
// SEVENTH DAY
var icon7; var main7; var descript7; var humidity7; var wind7; var temp7; var direction7;


// INPUT LOCATION TO RETRIVE DATA FROM API (of that location)
function updateByPlace(place) {
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?" +
      "q=" + place +
      "&mode=json&units=metric" +
      // PRONE TO CHANGE FROM 2 to 7
      "&cnt=7" +
      "&APPID=" + APPID;
    sendRequest(url)
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var forecast = {};

            // RETRIEVED ICON DATA
            forecast.icon = data.list[0].weather[0].icon;
            forecast.icon2 = data.list[1].weather[0].icon;
            forecast.icon3 = data.list[2].weather[0].icon;
            forecast.icon4 = data.list[3].weather[0].icon;
            forecast.icon5 = data.list[4].weather[0].icon;
            forecast.icon6 = data.list[5].weather[0].icon;
            forecast.icon7 = data.list[6].weather[0].icon;
            // RETRIEVED TEMP DATA
            forecast.temp = data.list[0].temp.day;
            forecast.temp2 = data.list[1].temp.day;
            forecast.temp3 = data.list[2].temp.day;
            forecast.temp4 = data.list[3].temp.day;
            forecast.temp5 = data.list[4].temp.day;
            forecast.temp6 = data.list[5].temp.day;
            forecast.temp7 = data.list[6].temp.day;
            // RETRIEVED HUMIDITY DATA
            forecast.humidity = data.list[0].humidity;
            forecast.humidity2 = data.list[1].humidity;
            forecast.humidity3 = data.list[2].humidity;
            forecast.humidity4 = data.list[3].humidity;
            forecast.humidity5 = data.list[4].humidity;
            forecast.humidity6 = data.list[5].humidity;
            forecast.humidity7 = data.list[6].humidity;
            // RETRIEVED WIND SPEED DATA
            forecast.speed = data.list[0].speed;
            forecast.speed2 = data.list[1].speed;
            forecast.speed3 = data.list[2].speed;
            forecast.speed4 = data.list[3].speed;
            forecast.speed5 = data.list[4].speed;
            forecast.speed6 = data.list[5].speed;
            forecast.speed7 = data.list[6].speed;
            // RETRIEVED WIND DIRECTION DATA
            forecast.deg = data.list[0].deg;
            forecast.deg2 = data.list[1].deg;
            forecast.deg3 = data.list[2].deg;
            forecast.deg4 = data.list[3].deg;
            forecast.deg5 = data.list[4].deg;
            forecast.deg6 = data.list[5].deg;
            forecast.deg7 = data.list[6].deg;
            // RETRIEVED DESCRIPTION WEATHER DATA
            forecast.descript = data.list[0].weather[0].description;
            forecast.descript2 = data.list[1].weather[0].description;
            forecast.descript3 = data.list[2].weather[0].description;
            forecast.descript4 = data.list[3].weather[0].description;
            forecast.descript5 = data.list[4].weather[0].description;
            forecast.descript6 = data.list[5].weather[0].description;
            forecast.descript7 = data.list[6].weather[0].description;
            // RETRIEVED MAIN WEATHER DATA
            forecast.main = data.list[0].weather[0].main;
            forecast.main2 = data.list[1].weather[0].main;
            forecast.main3 = data.list[2].weather[0].main;
            forecast.main4 = data.list[3].weather[0].main;
            forecast.main5 = data.list[4].weather[0].main;
            forecast.main6 = data.list[5].weather[0].main;
            forecast.main7 = data.list[6].weather[0].main;
            // RETRIEVED NAME
            forecast.name = data.city.name;


            // BONUS - WEEK PRESSURE AVERAGE
            var pressures = [];
            for (var i = 0; i < data.list.length; i++) {
                pressures.push(data.list[i].pressure)
            }

            var pressureSum = pressures.reduce(add, 0);

            function add(a, b) {
              return Math.round((a + b)/7);
            }
            console.log(pressureSum)

            forecast.avgPressure = pressureSum

            update(forecast)
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


// PRONE TO CHANGE...
function update(forecast) {
  // FUNCTION TO CHANGE THE HTML BASED ON RETRIEVED DATA
    // TEMPERATURE
    temp.innerHTML = roundTemp(forecast.temp);
    temp2.innerHTML = roundTemp(forecast.temp2);
    temp3.innerHTML = roundTemp(forecast.temp3);
    temp4.innerHTML = roundTemp(forecast.temp4);
    temp5.innerHTML = roundTemp(forecast.temp5);
    temp6.innerHTML = roundTemp(forecast.temp6);
    temp7.innerHTML = roundTemp(forecast.temp7);
    // WIND SPEED
    wind.innerHTML = forecast.speed;
    wind2.innerHTML = forecast.speed2;
    wind3.innerHTML = forecast.speed3;
    wind4.innerHTML = forecast.speed4;
    wind5.innerHTML = forecast.speed5;
    wind6.innerHTML = forecast.speed6;
    wind7.innerHTML = forecast.speed7;
    // HUMIDITY
    humidity.innerHTML = forecast.humidity;
    humidity2.innerHTML = forecast.humidity2;
    humidity3.innerHTML = forecast.humidity3;
    humidity4.innerHTML = forecast.humidity4;
    humidity5.innerHTML = forecast.humidity5;
    humidity6.innerHTML = forecast.humidity6;
    humidity7.innerHTML = forecast.humidity7;
    // MAIN
    main.innerHTML = forecast.main;
    main2.innerHTML = forecast.main2;
    main3.innerHTML = forecast.main3;
    main4.innerHTML = forecast.main4;
    main5.innerHTML = forecast.main5;
    main6.innerHTML = forecast.main6;
    main7.innerHTML = forecast.main7;
    // DESCRIPTION
    descript.innerHTML = forecast.descript;
    descript2.innerHTML = forecast.descript2;
    descript3.innerHTML = forecast.descript3;
    descript4.innerHTML = forecast.descript4;
    descript5.innerHTML = forecast.descript5;
    descript6.innerHTML = forecast.descript6;
    descript7.innerHTML = forecast.descript7;
    // WIND DIRECTION
    direction.innerHTML = compassDirection(forecast.deg);
    direction2.innerHTML = compassDirection(forecast.deg2);
    direction3.innerHTML = compassDirection(forecast.deg3);
    direction4.innerHTML = compassDirection(forecast.deg4);
    direction5.innerHTML = compassDirection(forecast.deg5);
    direction6.innerHTML = compassDirection(forecast.deg6);
    direction7.innerHTML = compassDirection(forecast.deg7);
    // ICONS
    icon.src = "assets/img/" + forecast.icon + ".png";
    icon2.src = "assets/img/" + forecast.icon2 + ".png";
    icon3.src = "assets/img/" + forecast.icon3 + ".png";
    icon4.src = "assets/img/" + forecast.icon4 + ".png";
    icon5.src = "assets/img/" + forecast.icon5 + ".png";
    icon6.src = "assets/img/" + forecast.icon6 + ".png";
    icon7.src = "assets/img/" + forecast.icon7 + ".png";
    // ONLY REQUIRE LOCATION ONCE...
    loc.innerHTML = forecast.name;



    // BONUS - WEEK PRESSURE AVERAGE
    avgPressure.innerHTML = forecast.avgPressure;


}


// ROUND THE TEMP
function roundTemp(t) {
    return Math.round(t);
}

// COMPASS FOR WIND DIRECTION
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
    // FUNCTION TO GET ELEMENTS ON THE INDEX THROUGH SPECIFIC ID's
    loc = document.getElementById('location')
    icon = document.getElementById('icon')
    main = document.getElementById('main')
    descript = document.getElementById('description')
    humidity = document.getElementById('humidity')
    wind = document.getElementById('wind')
    direction = document.getElementById('direction')
    temp = document.getElementById('temperature')

    icon2 = document.getElementById('icon2')
    main2 = document.getElementById('main2')
    descript2 = document.getElementById('description2')
    humidity2 = document.getElementById('humidity2')
    wind2 = document.getElementById('wind2')
    direction2 = document.getElementById('direction2')
    temp2 = document.getElementById('temperature2')

    icon3 = document.getElementById('icon3')
    main3 = document.getElementById('main3')
    descript3 = document.getElementById('description3')
    humidity3 = document.getElementById('humidity3')
    wind3 = document.getElementById('wind3')
    direction3 = document.getElementById('direction3')
    temp3 = document.getElementById('temperature3')

    icon4 = document.getElementById('icon4')
    main4 = document.getElementById('main4')
    descript4 = document.getElementById('description4')
    humidity4 = document.getElementById('humidity4')
    wind4 = document.getElementById('wind4')
    direction4 = document.getElementById('direction4')
    temp4 = document.getElementById('temperature4')

    icon5 = document.getElementById('icon5')
    main5 = document.getElementById('main5')
    descript5 = document.getElementById('description5')
    humidity5 = document.getElementById('humidity5')
    wind5 = document.getElementById('wind5')
    direction5 = document.getElementById('direction5')
    temp5 = document.getElementById('temperature5')

    icon6 = document.getElementById('icon6')
    main6 = document.getElementById('main6')
    descript6 = document.getElementById('description6')
    humidity6 = document.getElementById('humidity6')
    wind6 = document.getElementById('wind6')
    direction6 = document.getElementById('direction6')
    temp6 = document.getElementById('temperature6')

    icon7 = document.getElementById('icon7')
    main7 = document.getElementById('main7')
    descript7 = document.getElementById('description7')
    humidity7 = document.getElementById('humidity7')
    wind7 = document.getElementById('wind7')
    direction7 = document.getElementById('direction7')
    temp7 = document.getElementById('temperature7')


    // BONUS - WEEK PRESSURE AVERAGE
    avgPressure = document.getElementById('pressure-avg')



// Insert City name to find the weather stats of that area!
  updateByPlace("Toronto");
}
