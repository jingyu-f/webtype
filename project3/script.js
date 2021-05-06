$(document).ready(function(){

console.log('script loaded');

const wghtmax = 500;
const huemax = 360;



  $('.axis-range').on('input', function(){

    let value = parseInt($(this).val()); //get slider input value
   //console.log(value);

    const slidertype = $(this).data('type'); //get slider axis

    console.log("--"+slidertype, value );

    $('#shape').css("--"+slidertype, value);


  });
});
