$('.js-tilt').tilt({

    glare: true,
    maxGlare: .5,


});

$(document).ready(function(){       
    //sticky navbar
    var scroll_start = 0;  
    var startchange = $('#startchange');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".about").css('background-color', '#30c7ec').css('transition', 'all 3s');
           $("span").css('color', "white");
        } else {
           $('.about').css('background-color', '#fff').css('color','black');
           $("span").css('color', '#9A19B3');
        }
    });
     }
 });
 window.sr = ScrollReveal({ reset: true });

sr.reveal('i', {duration: 1000}, 200);
