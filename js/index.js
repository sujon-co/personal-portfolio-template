// Not a ton of code, but hard to
const nav = document.querySelector('.navbar');
const navLinkList = document.querySelectorAll('.nav-link');
const title = document.querySelector('.title');
const navLinkArray = [...navLinkList];
function fixNav() {
    if (window.scrollY >= 100) {
        nav.classList.add('animate__fadeInDown','fixed');
        navLinkArray.map(link => {
            link.classList.add('nav-link-change')
        })
        title.style.color = "black"
    } else {
        nav.classList.remove('animate__fadeInDown','fixed');
        navLinkArray.map(link => {
            link.classList.remove('nav-link-change')
        })
        title.style.color = "white";
    }
}

window.addEventListener('scroll', fixNav);



 /* Barfiller */
 $(document).ready(function () {
     $('#bar1').barfiller({
         barColor: "#000",
         duration: 2000
     });
     $('#bar2').barfiller({
         barColor: "#000",
         duration: 2000
     });
     $('#bar3').barfiller({
         barColor: "#000",
         duration: 2000
     });
     $('#bar4').barfiller({
         barColor: "#000",
         duration: 2000
     });
     $('#bar5').barfiller({
         barColor: "#000",
         duration: 2000
     });
     $('#bar6').barfiller({
         barColor: "#000",
         duration: 2000
     });
 });
/* Owl Carouserl */
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: 1000,
        dot: 0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });
});
/* Typed Js */
var typed = new Typed('.element', {
    strings: [
        "I'm Front-End Web Developer", "5+ Mini Javascript Project Here",
        "1. LoveChecker Calculator", "", "2. Drum Kit With Keyboard Keys",
        "3. Live Analog Clock", "4. Propose Your Crush", "5.Shopping Cart"
    ],
    loop:true,
    typeSpeed: 25,
    startDelay: 100,
    backSpeed: 25,
    smartBackspace: true,
    backDelay: 900,

});