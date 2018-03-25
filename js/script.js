$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5,
});

$(document).ready(function(){       

    var scroll_start = 0;  
    var startchange = $('#startchange');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".about").css('background-color', '#30c7ec').css('transition', 'all 3s');
           $("span").css('color', "white").css('font-weight', '700').css('transition', 'all 1s');
        } else {
           $('.about').css('background-color', '#fff').css('color','black').css('transition', 'all 3s');
           $("span").css('color', '#9A19B3').css('transition', 'all 1s');
        }
    });
     }
 });
 
 window.sr = ScrollReveal({ reset: true });
 sr.reveal('.technology', {duration: 1000}, 200);

 $('.collapsed').on('click', function(event) {
    if (window.matchMedia('(max-width: 576px)').matches) {
        $('.box-1').css('margin-top', '0');
        $('.box-2').css( 'margin-top', '17px');
        $('.box').css('height', '80px');
        $('.my-photo').css('margin-top', '50px');
    }
});

$(".o-mnie").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$(".technologia").click(function() {
    $('html, body').animate({
        scrollTop: $("#technology").offset().top
    }, 1000);
});

$(".kontakt").click(function() {
    $('html, body').animate({
        scrollTop: $("#kontakt").offset().top
    }, 1000);
});
$(".projekty").click(function() {
    $('html, body').animate({
        scrollTop: $("#projekty").offset().top
    }, 1000);
});
