// Not a ton of code, but hard to
const nav = document.querySelector('.navbar');
function fixNav() {
    if (window.scrollY >= 100) {
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('animate__fadeInDown','fixed');
        
    } else {
        nav.classList.remove('animate__fadeInDown','fixed');
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
