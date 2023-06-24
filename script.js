$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


// typing animation 
var typeed = new Typed(".typing", {
    strings: ["Programmer", "Youtuber", "CS student"],
    typeSpeed: 100,
    backSpeed: 60,
    look: true
});

var typeed = new Typed(".typing-2", {
    strings: ["Programmer", "Youtuber", "CS student"],
    typeSpeed: 100,
    backSpeed: 60,
    look: true
})

