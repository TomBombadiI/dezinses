$(document).ready(function () {

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
 img.removeAttribute('data-src');
  };
});

$utp = $("#utp").offset().top;
$utp_h = $(".utp.n1").height();
$utp_h = $utp + $utp_h - 100;

$vid = $("#vid").offset().top;
$vid_h = $(".vid").height();
$vid_h = $vid + $vid_h - 100;

$objekt = $("#objekt").offset().top;
$objekt_h = $(".obekt").height();
$objekt_h = $objekt + $objekt_h - 100;

$teritori = $("#teritori").offset().top;
$teritori_h = $(".teritori").height();
$teritori_h = $teritori + $teritori_h - 100;

$home = $("#tuman").offset().top;
$home_h = $(".home").height();
$home_h = $home + $home_h - 100;

$car = $("#avto").offset().top;
$car_h = $(".car").height();
$car_h = $car + $car_h - 100;

$comment = $("#comment").offset().top;
$comment_h = $(".comment").height();
$comment_h = $comment + $comment_h + 200;

$contact = $("#contact").offset().top;
$contact_h = $(".contact").height();
$contact_h = $contact + $contact_h + 400;

$(window).scroll(function(){
$(".header2 .menu a").removeClass("activ");

  $top = $(window).scrollTop();
  $top = $top + 2;

  if($utp < $top){
    if($top > $utp_h){
      $(".header2 a[href*=#utp]").removeClass("activ");
    }else{
      $(".header2 a[href*=#utp]").addClass("activ");
    }
  }

  if($vid < $top){
    if($top > $vid_h){
      $(".header2 a[href*=#vid]").removeClass("activ");
    }else{
      $(".header2 a[href*=#vid]").addClass("activ");
    }
  }

  if($objekt < $top){
    if($top > $objekt_h){
      $(".header2 a[href*=#objekt]").removeClass("activ");
    }else{
      $(".header2 a[href*=#objekt]").addClass("activ");
    }
  }

  if($teritori < $top){
    if($top > $teritori_h){
      $(".header2 a[href*=#teritori]").removeClass("activ");
    }else{
      $(".header2 a[href*=#teritori]").addClass("activ");
    }
  }

  if($home < $top){
    if($top > $home_h){
      $(".header2 a[href*=#tuman]").removeClass("activ");
    }else{
      $(".header2 a[href*=#tuman]").addClass("activ");
    }
  }

  if($car < $top){
    if($top > $car_h){
      $(".header2 a[href*=#avto]").removeClass("activ");
    }else{
      $(".header2 a[href*=#avto]").addClass("activ");
    }
  }

  if($comment < $top){
    if($top > $comment_h){
      $(".header2 a[href*=#comment]").removeClass("activ");
    }else{
      $(".header2 a[href*=#comment]").addClass("activ");
    }
  }

  if($contact < $top){
    if($top > $contact_h){
      $(".header2 a[href*=#contact]").removeClass("activ");
    }else{
      $(".header2 a[href*=#contact]").addClass("activ");
    }
  }


});







$('.header a[href*=#], .header2 a[href*=#]').anchor({
    transitionDuration : 600
});


/*
$(".header2 .menu a").click(function(){
  $a = $(this);
  $(".header2 .menu a").removeClass("activ");
  $a.addClass("activ");
});
*/


$(".header2 .burger .on").click(function(){
  $(".header2 .burger .on").hide();
  $(".header2 .burger .off").show();
  $(".menu_left").animate({left: "0px"}, 300);
});
$(".header2 .burger .off, .menu_left a").click(function(){
  $(".header2 .burger .off").hide();
  $(".header2 .burger .on").show();
  $(".menu_left").animate({left: "-100%"}, 300);
});



$(".mini .chek").click(function(){ 
  $(this).toggleClass("activ");
});


$(".footer .politik").click(function(e){ 
  $('.politika').fadeIn(100);
  $('.fon_black').fadeIn(100);
  $("body").css("overflow","hidden");
});


$(".vid .but, .teritori .but, .home .but").click(function(e){ 
  $('.mess.n1').fadeIn(100);
  $('.fon_black').fadeIn(100);
  $("body").css("overflow","hidden");
});

$(".car .but").click(function(e){ 
  $('.mess.n2').fadeIn(100);
  $('.fon_black').fadeIn(100);
  $("body").css("overflow","hidden");
});



$(".politika .clos, .fon_black, .mess .clos, .popup_info .clos, .mess .clos").click(function(){ 
  $('.politika').fadeOut(100);
  $('.fon_black').fadeOut(100);
  $("body").css("overflow-y","scroll");
  $('.mess').fadeOut(100);
});



$(".vopros .blocks .title").click(function(){ 
  $block = $(this);
  $(this).toggleClass("activ");
  $block.parent().find(".text").slideToggle(200);
});




$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

// $("form .tellfon").click(function(){
//     $(this).setCursorPosition(3);  // set position number
//   });
// $("form .tellfon").mask("+7(999)999-99-99");


$(".form .but").click(function(){
  $but = $(this).parent().find(".submit");
  $but.click();
});






var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();




$('.but').addClass('autoflash').append('<div class="flash lighting" style="height: 120px;width: 40px;top: 0px;left: -140px;"></div>');






var StickyElement = function(node){
  var doc = $(document), 
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content');
  
  var onScroll = function(e){
  
    var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
    
    
    if(docTop > anchorTop){
      if(!fixed){
        anchor.height(content.outerHeight());
        content.addClass('fixed');        
        fixed = true;
      }
    }  else   {
      if(fixed){
        anchor.height(0);
        content.removeClass('fixed'); 
        fixed = false;
      }
    }
  };
  
  $(window).on('scroll', onScroll);
};

var demo = new StickyElement($('#sticky'));





$(".comment .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 500,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      500: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1200: {
        items: 3,
        nav: false
      }
    }
});
$(".comment .owl_left").click(function() { 
    $('.comment .owl-prev').trigger('click');
});
$(".comment .owl_right").click(function() {
    $('.comment .owl-next').trigger('click');
});







$(".mess.n1 form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $.ajax({
        url: 'sendTelegramMessage.php', 
        data: $('.mess.n1 form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.mess.n1 form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./form/thanks.html"); 
             ym(94587972,'reachGoal','otpravka_vse_formy');     
        },
    })
});



$(".mess.n2 form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $.ajax({
        url: 'sendTelegramMessage.php', 
        data: $('.mess.n2 form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.mess.n2 form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./form/thanks.html"); 
             ym(94587972,'reachGoal','otpravka_vse_formy');    
        },
    })
});



$(".block_top form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $.ajax({
        url: 'sendTelegramMessage.php', 
        data: $('.block_top form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.block_top form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./form/thanks.html"); 
             ym(94587972,'reachGoal','otpravka_vse_formy');   
        },
    })
});


$(".utp.n1 form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $.ajax({
        url: 'sendTelegramMessage.php', 
        data: $('.utp.n1  form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.utp.n1  form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./form/thanks.html"); 
             ym(94587972,'reachGoal','otpravka_vse_formy');     
        },
    })
});


$(".utp.n2 form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $.ajax({
        url: 'sendTelegramMessage.php', 
        data: $('.utp.n2  form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.utp.n2  form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./form/thanks.html"); 
             ym(94587972,'reachGoal','otpravka_vse_formy');      
        },
    })
});



$(".vopros form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $.ajax({
        url: 'sendTelegramMessage.php', 
        data: $('.vopros form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.vopros form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./form/thanks.html"); 
             ym(94587972,'reachGoal','forma_voprosy');   
        },
    })
});


});

