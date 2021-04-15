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
