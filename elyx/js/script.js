function burgerAction() {
  $(".burger").click(function(){

    $(".logo").toggleClass("burger_menu_logo");

    $("nav").toggleClass("burger_menu");

    $(".close").toggleClass("close_menu");

    $(".menu").toggleClass("ul_burger_menu");

    $(".fb").toggleClass("fb_burger");

  });

  $(".close").click(function() {

    $(".logo").toggleClass("burger_menu_logo");

    $("nav").toggleClass("burger_menu");

    $(".close").toggleClass("close_menu");

    $(".menu").toggleClass("ul_burger_menu");

    $(".fb").toggleClass("fb_burger");
  });
}

burgerAction();
