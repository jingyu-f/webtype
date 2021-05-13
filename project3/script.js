$(document).ready(function(){

console.log('script loaded');

const wghtmax = 500;
const lummax = 100;

let value;

  $('.axis-range').on('input', function(){

    value = parseInt($(this).val()); //get slider input value
    console.log(value);

    const slidertype = $(this).data('type'); //get slider axis

      console.log("--"+slidertype, value);

     $('#shape').css("--"+slidertype, value);
  });

  $('form').submit(function(e){
	    console.log('submit');

	    let plain = $('#plain').val();
	    $('#word').text(plain);

      //let shape = $('#shape').val();
      //$('#newshape').text(shape);
      //let css = $('#shape').css();
      //$('#newshape').css(css);

      $('form').hide();
      $('#poster').show();
      // $('#newshape').append(cellname);
      //
      //
	   	// let chocolate = $('#options').val();
	    // $('#chocolate-choice').text(chocolate);
      //
	    // $('form').hide(); //hide form upon submission
      //
	    // $('#output').show(); //show output upon submission

	    return false;
	});


});