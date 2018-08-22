$('#feel-the-wave').wavify({
  height: 30,
  bones: 4,
  amplitude: 80,
  color: 'rgba(255, 255, 255, .06)',
  speed: .1
});

$('#feel-the-wave-two').wavify({
  height: 40,
  bones: 3,
  amplitude: 60,
  color: 'rgba(255, 255, 255, .03)',
  speed: .2
});

$('#feel-the-wave1').wavify({
  height: 50,
  bones: 4,
  amplitude: 30,
  color: 'rgba(13, 86, 136, .2)',
  speed: .1
});

$('#feel-the-wave1-two').wavify({
  height: 50,
  bones: 3,
  amplitude: 30,
  color: 'rgba(11, 83, 132, .2)',
  speed: .2
});

//валидация

$('.submit').click(function() {

  let name = $('input.name').val();

  if (name.length <= 0){
    $('.nameError').html("Enter your name");
    $('input.name').css( "border", "1px solid red" );
  } else{
    var correctName = "user";
    console.log(correctName);
    $('.nameError').html("");
    $('input.name').css( "border", "1px solid #ccc" );
  }

  let url = $('input.url').val();

  if (url.length <= 0){
    $('.urlError').html("Enter your URL");
    $('input.url').css( "border", "1px solid red" );
  } else{
    var correctUrl = "siteurl";
    console.log(correctUrl);

  }

  let email = $('input[type=email]').val();

  // if (email.length < 0){
  //   $('.emailError').html("Incorrect Email");
  //   $('.center-input').css( "border", "1px solid red" );
  // } else{
  //   return;
  //
  // }

	if (email.length > 0
  && (email.match(/.+?\@.+/g) || []).length !== 1) {
  	console.log('invalid');
    $('.emailError').html("Incorrect Email");
    $('.center-input').css( "border", "1px solid red" );
  } else {
    var correctEmail = "userMail";
    console.log(correctEmail);

  }

  if(correctUrl == "siteurl" && correctName == "user" && correctEmail == "userMail"){
    console.log('hello')
    $('.thank').css('display','block');

  }
  else {
    return;
  }
});

// скролл

$(document).ready(function(){
    $('.scroll').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
        }
	    return false;
    });
});
