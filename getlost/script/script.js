$(document).ready(function() {
  var flag1 = true;
$('.batu_link').click(function () {
    if (flag1 == true) {
        // $('.batu_right_block').css({display: 'block'});
        $('.batu_right_block').animate({opacity: '1'},500);
        $('.batu_link').css({color: '#ccc'});
        flag1 = false;
    }
    else {
        // $('.batu_right_block').css({display: 'none'});
        $('.batu_right_block').animate({opacity: '0'},500);
        $('.batu_link').css({color: 'white'});
        flag1 = true;
    }
})

var flag2 = true;
$('.bromo_left_link').click(function () {
  if (flag2 == true) {
      // $('.batu_right_block').css({display: 'block'});
      $('.bromo_opasity_block').animate({opacity: '1'},500);
      $('.bromo_left_link').css({color: '#ccc'});
      flag2 = false;
  }
  else {
      // $('.batu_right_block').css({display: 'none'});
      $('.bromo_opasity_block').animate({opacity: '0'},500);
      $('.bromo_left_link').css({color: 'white'});
      flag2 = true;
  }
})
});


$(document).ready(function (){
 $(".add_sub").click(function(){
 $(".added_block").css('display: block')
 $(".added_block").toggle();
 return false;
  });
});

$(document).ready(function (){
 $(".add_sub_batu").click(function(){
 $(".added_block_batu").css('display: block')
 $(".added_block_batu").toggle();
 return false;
  });
});
