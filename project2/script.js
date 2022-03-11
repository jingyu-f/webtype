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

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      // Pause/Play the animation
      if (entry.isIntersecting) entry.target.style.animationPlayState = "running"
      else entry.target.style.animationPlayState = "paused"
    });
  });

  var variableTexts = document.querySelectorAll(".animated");
  variableTexts.forEach(function(el) { observer.observe(el); });

});
// //mousemove
// $('#specimen').mousemove(function(event) {
//
//   console.log(event.pageY);
//
//   let cursorY = 1 - (event.pageY) / $(this).height();
//
//   let settingY = Math.floor(cursorY * 1400);
//
//
//   $("#letter_row1").css({
//     "--hght": settingY
//   });
//
// });

let html = "";
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Providence&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_providence = data["wind"]["speed"];

    $('#wind_providence').text(wind_providence);

   let hght = 0;
   if (wind_providence !== 0){
        hght = Math.round(wind_providence*90);
   }

   console.log(hght);

   let setting = "'hght' " + hght;
   $('.highlight_p').css('font-variation-settings', setting);
   });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_denver = data["wind"]["speed"];

    $('#wind_denver').text(wind_denver);
    let hght = 0;
    if (wind_denver !== 0){
         hght = Math.round(wind_denver*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_d').css('font-variation-settings', setting);
    });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_seattle = data["wind"]["speed"];

    $('#wind_seattle').text(wind_seattle);
    let hght = 0;
    if (wind_seattle !== 0){
         hght = Math.round(wind_seattle*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_s').css('font-variation-settings', setting);
    });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_sf = data["wind"]["speed"];

    $('#wind_sf').text(wind_sf);
    let hght = 0;
    if (wind_sf !== 0){
         hght = Math.round(wind_sf*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_sf').css('font-variation-settings', setting);
    });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_dallas = data["wind"]["speed"];

    $('#wind_dallas').text(wind_dallas);
    let hght = 0;
    if (wind_dallas !== 0){
         hght = Math.round(wind_dallas*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_da').css('font-variation-settings', setting);
  });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_chicago = data["wind"]["speed"];

    $('#wind_chicago').text(wind_chicago);
    let hght = 0;
    if (wind_chicago !== 0){
         hght = Math.round(wind_chicago*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_ch').css('font-variation-settings', setting);
  });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_detroit = data["wind"]["speed"];

    $('#wind_detroit').text(wind_detroit);
    let hght = 0;
    if (wind_detroit !== 0){
         hght = Math.round(wind_detroit*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_de').css('font-variation-settings', setting);
  });
//
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Washington&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_washington = data["wind"]["speed"];

      $('#wind_washington').text(wind_washington);
      let hght = 0;
      if (wind_washington !== 0){
           hght = Math.round(wind_washington*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_wa').css('font-variation-settings', setting);
    });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=New York&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

      console.log(data);
        let wind_newyork = data["wind"]["speed"];

        $('#wind_newyork').text(wind_newyork);
        let hght = 0;
        if (wind_newyork !== 0){
             hght = Math.round(wind_newyork*90);
        }

        console.log(hght);

        let setting = "'hght' " + hght;
        $('.highlight_n').css('font-variation-settings', setting);
        $('.highlight_8_0').css('font-variation-settings', setting);
      });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_boston = data["wind"]["speed"];

    $('#wind_boston').text(wind_boston);
    let hght = 0;
    if (wind_boston !== 0){
         hght = Math.round(wind_boston*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_bo').css('font-variation-settings', setting);
  });
//
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

  console.log(data);
    let wind_baltimore = data["wind"]["speed"];

    $('#wind_baltimore').text(wind_baltimore);
    let hght = 0;
    if (wind_baltimore !== 0){
         hght = Math.round(wind_baltimore*90);
    }

    console.log(hght);

    let setting = "'hght' " + hght;
    $('.highlight_ba').css('font-variation-settings', setting);
  });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_philadelphia = data["wind"]["speed"];

      $('#wind_philadelphia').text(wind_philadelphia);
      let hght = 0;
      if (wind_philadelphia !== 0){
           hght = Math.round(wind_philadelphia*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_ph').css('font-variation-settings', setting);
    });
  //
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_miami = data["wind"]["speed"];

      $('#wind_miami').text(wind_miami);
      let hght = 0;
      if (wind_miami !== 0){
           hght = Math.round(wind_miami*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_mi').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_charlotte = data["wind"]["speed"];

      $('#wind_charlotte').text(wind_charlotte);
      let hght = 0;
      if (wind_charlotte !== 0){
           hght = Math.round(wind_charlotte*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_ch').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=LasVegas&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_lv = data["wind"]["speed"];

      $('#wind_lv').text(wind_lv);
      let hght = 0;
      if (wind_lv !== 0){
           hght = Math.round(wind_lv*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_lv').css('font-variation-settings', setting);
    });
    //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Columbus&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_columbus = data["wind"]["speed"];

      $('#wind_columbus').text(wind_columbus);
      let hght = 0;
      if (wind_columbus !== 0){
           hght = Math.round(wind_columbus*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_columbus').css('font-variation-settings', setting);
    });
   //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_sanjose = data["wind"]["speed"];

      $('#wind_sanjose').text(wind_sanjose);
      let hght = 0;
      if (wind_sanjose !== 0){
           hght = Math.round(wind_sanjose*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_sanjose').css('font-variation-settings', setting);
    });
     //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_neworleans = data["wind"]["speed"];

      $('#wind_neworleans').text(wind_neworleans);
      let hght = 0;
      if (wind_neworleans !== 0){
           hght = Math.round(wind_neworleans*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_neworleans').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_austin = data["wind"]["speed"];

      $('#wind_austin').text(wind_austin);
      let hght = 0;
      if (wind_austin !== 0){
           hght = Math.round(wind_austin*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_austin').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_portland = data["wind"]["speed"];

      $('#wind_portland').text(wind_portland);
      let hght = 0;
      if (wind_portland !== 0){
           hght = Math.round(wind_portland*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_portland').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_atlanta = data["wind"]["speed"];

      $('#wind_atlanta').text(wind_atlanta);
      let hght = 0;
      if (wind_atlanta !== 0){
           hght = Math.round(wind_atlanta*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_atlanta').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Oklahoma&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_oklahoma = data["wind"]["speed"];

      $('#wind_oklahoma').text(wind_oklahoma);
      let hght = 0;
      if (wind_oklahoma !== 0){
           hght = Math.round(wind_oklahoma*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_oklahoma').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_raleigh = data["wind"]["speed"];

      $('#wind_raleigh').text(wind_raleigh);
      let hght = 0;
      if (wind_raleigh !== 0){
           hght = Math.round(wind_raleigh*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_raleigh').css('font-variation-settings', setting);
    });
   //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_minneapolis = data["wind"]["speed"];

      $('#wind_minneapolis').text(wind_minneapolis);
      let hght = 0;
      if (wind_minneapolis !== 0){
           hght = Math.round(wind_minneapolis*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_min').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_la = data["wind"]["speed"];

      $('#wind_la').text(wind_la);
      let hght = 0;
      if (wind_la !== 0){
           hght = Math.round(wind_la*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_la').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=San Jose&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_sj = data["wind"]["speed"];

      $('#wind_sj').text(wind_sj);
      let hght = 0;
      if (wind_sj !== 0){
           hght = Math.round(wind_sj*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_sj').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Long Beach&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_long = data["wind"]["speed"];

      $('#wind_long').text(wind_long);
      let hght = 0;
      if (wind_long !== 0){
           hght = Math.round(wind_long*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_long').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Colorado Springs&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_cs = data["wind"]["speed"];

      $('#wind_cs').text(wind_cs);
      let hght = 0;
      if (wind_cs !== 0){
           hght = Math.round(wind_cs*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_cs').css('font-variation-settings', setting);
    });
    //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Jacksonville&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_ja = data["wind"]["speed"];

      $('#wind_ja').text(wind_ja);
      let hght = 0;
      if (wind_ja !== 0){
           hght = Math.round(wind_ja*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_ja').css('font-variation-settings', setting);
    });
   //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_sa = data["wind"]["speed"];

      $('#wind_sa').text(wind_sa);
      let hght = 0;
      if (wind_sa !== 0){
           hght = Math.round(wind_sa*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_sa').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Oakland&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_oakland = data["wind"]["speed"];

      $('#wind_oakland').text(wind_oakland);
      let hght = 0;
      if (wind_oakland !== 0){
           hght = Math.round(wind_oakland*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_oakland').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Honolulu&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_honolulu = data["wind"]["speed"];

      $('#wind_honolulu').text(wind_honolulu);
      let hght = 0;
      if (wind_honolulu !== 0){
           hght = Math.round(wind_honolulu*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_honolulu').css('font-variation-settings', setting);
    });
   //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Lexington&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_lexington = data["wind"]["speed"];

      $('#wind_lexington').text(wind_lexington);
      let hght = 0;
      if (wind_lexington !== 0){
           hght = Math.round(wind_lexington*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_lexington').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Cincinnati&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_cin = data["wind"]["speed"];

      $('#wind_cin').text(wind_cin);
      let hght = 0;
      if (wind_cin !== 0){
           hght = Math.round(wind_cin*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_cin').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Newark&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_newark = data["wind"]["speed"];

      $('#wind_newark').text(wind_newark);
      let hght = 0;
      if (wind_newark !== 0){
           hght = Math.round(wind_newark*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_newark').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_orlando = data["wind"]["speed"];

      $('#wind_orlando').text(wind_orlando);
      let hght = 0;
      if (wind_orlando !== 0){
           hght = Math.round(wind_orlando*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_orlando').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Memphis&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_mem = data["wind"]["speed"];

      $('#wind_mem').text(wind_mem);
      let hght = 0;
      if (wind_mem !== 0){
           hght = Math.round(wind_mem*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_mem').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Riverside&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_riverside = data["wind"]["speed"];

      $('#wind_riverside').text(wind_riverside);
      let hght = 0;
      if (wind_riverside !== 0){
           hght = Math.round(wind_riverside*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_riverside').css('font-variation-settings', setting);
    });
  //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Pittsburgh&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_pit = data["wind"]["speed"];

      $('#wind_pit').text(wind_pit);
      let hght = 0;
      if (wind_pit !== 0){
           hght = Math.round(wind_pit*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_pit').css('font-variation-settings', setting);
    });
    //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Irvine&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_ir = data["wind"]["speed"];

      $('#wind_ir').text(wind_ir);
      let hght = 0;
      if (wind_ir !== 0){
           hght = Math.round(wind_ir*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_ir').css('font-variation-settings', setting);
    });
    //
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Aurora&appid=9f4a66a4052ffb8b92e0dd59a8d99657&units=imperial', function(data) {

    console.log(data);
      let wind_au = data["wind"]["speed"];

      $('#wind_au').text(wind_au);
      let hght = 0;
      if (wind_au !== 0){
           hght = Math.round(wind_au*90);
      }

      console.log(hght);

      let setting = "'hght' " + hght;
      $('.highlight_au').css('font-variation-settings', setting);
    });
