$(document).ready(function() {

    let html = "";

    /*
    * Weather data from Open Weather API
    */


    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Providence&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

      console.log(data);
        let currentTemp = data["main"]["temp"];
        let feelsTemp = data["main"]["feels_like"];

        let wind = data["wind"]["speed"];
        $('#temp').text(currentTemp);
        $('#feels').text(feelsTemp);

       let fontWeight = Math.round(feelsTemp*10);// wght, goes from 300 to 1000 — font weight
       console.log(fontWeight);

       let slant = 0;
       if (wind !== 0){
            slant = Math.round((wind/10)*-15);  // slnt, goes from 0 to -15  — Upright (0°) to Slanted (about 15°)
       }

       console.log(slant);

       let setting = "'CASL' 1," + "'wght' " + fontWeight + ", 'slnt' " + slant;
       $('.highlight').css('font-variation-settings', setting);

    });

});
