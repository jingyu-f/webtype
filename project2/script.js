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
