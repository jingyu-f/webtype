$(document).ready(function(){

console.log('script loaded');

const hghtmax = 1400;

$('.axis-range').on('input', function(){

  let value = parseInt($(this).val()); //get slider input value
 //console.log(value);

  const slidertype = $(this).data('slidertype'); //get slider axis

  console.log("--"+slidertype, value );

  $('#dominant').css("--"+slidertype, value);

});
});
//mousemove
$('#specimen').mousemove(function(event) {

  console.log(event.pageY);

  let cursorY = 1 - (event.pageY) / $(this).height();

  let settingY = Math.floor(cursorY * 1400);


  $("#letter_row1").css({
    "--hght": settingY
  });

});

let html = "";
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Providence&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_providence = data["wind"]["speed"];

    $('#wind_providence').text(wind_providence);

   let hght = 0;
   if (wind_providence !== 0){
        hght = Math.round(wind_providence*100);
   }

   console.log(hght);

   let setting = "'hght' " + hght;
   $('.highlight').css('font-variation-settings', setting);
   });
//
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_denver = data["wind"]["speed"];

    $('#wind_denver').text(wind_denver);
    let hght = 0;
    if (wind_denver !== 0){
         hght = Math.round(wind_denver*100);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_1').css('font-variation-settings', setting);
    });
//
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_seattle = data["wind"]["speed"];

    $('#wind_seattle').text(wind_seattle);
    let hght = 0;
    if (wind_seattle !== 0){
         hght = Math.round(wind_seattle*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_2').css('font-variation-settings', setting);
    });
//
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_sf = data["wind"]["speed"];

    $('#wind_sf').text(wind_sf);
    let hght = 0;
    if (wind_sf !== 0){
         hght = Math.round(wind_sf*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_3').css('font-variation-settings', setting);
    });
//
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_dallas = data["wind"]["speed"];

    $('#wind_dallas').text(wind_dallas);
    let hght = 0;
    if (wind_dallas !== 0){
         hght = Math.round(wind_dallas*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_4').css('font-variation-settings', setting);
  });
//
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_chicago = data["wind"]["speed"];

    $('#wind_chicago').text(wind_chicago);
    let hght = 0;
    if (wind_chicago !== 0){
         hght = Math.round(wind_chicago*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_5').css('font-variation-settings', setting);
  });
//
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_detroit = data["wind"]["speed"];

    $('#wind_detroit').text(wind_detroit);
    let hght = 0;
    if (wind_detroit !== 0){
         hght = Math.round(wind_detroit*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_6').css('font-variation-settings', setting);
  });
  //
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Washington&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_washington = data["wind"]["speed"];

      $('#wind_washington').text(wind_washington);
      let hght = 0;
      if (wind_washington !== 0){
           hght = Math.round(wind_washington*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_7').css('font-variation-settings', setting);
    });
    //
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=New York&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

      console.log(data);
        let wind_newyork = data["wind"]["speed"];

        $('#wind_newyork').text(wind_newyork);
        let hght = 0;
        if (wind_newyork !== 0){
             hght = Math.round(wind_newyork*90);
        }

        console.log(hght);

        let setting = "'hght' " + hght;
        $('.highlight_8').css('font-variation-settings', setting);
      });
//
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_boston = data["wind"]["speed"];

    $('#wind_boston').text(wind_boston);
    let hght = 0;
    if (wind_boston !== 0){
         hght = Math.round(wind_boston*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_9').css('font-variation-settings', setting);
  });
//
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_baltimore = data["wind"]["speed"];

    $('#wind_baltimore').text(wind_baltimore);
    let hght = 0;
    if (wind_baltimore !== 0){
         hght = Math.round(wind_baltimore*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_10').css('font-variation-settings', setting);
  });
