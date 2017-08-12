// main-nav open-close
var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
// end main-nav open-close

// reviews slider
var reviewsList = document.querySelector(".reviews__list");

reviewsList.classList.remove("reviews--no-js");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  var dots = document.getElementsByClassName("dot");


  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+= " active";
}
// reviews slider

// var slideNow = 1;
// var slideCount = $('#slidewrapper').children().length;
// var slideInterval = 3000;
// var navBtnId = 0;
// var translateWidth = 0;
//
// $(document).ready(function() {
//     var switchInterval = setInterval(nextSlide, slideInterval);
//
//     $('#viewport').hover(function() {
//         clearInterval(switchInterval);
//     }, function() {
//         switchInterval = setInterval(nextSlide, slideInterval);
//     });
//
//     $('#next-btn').click(function() {
//         nextSlide();
//     });
//
//     $('#prev-btn').click(function() {
//         prevSlide();
//     });
//
//     $('.slide-nav-btn').click(function() {
//         navBtnId = $(this).index();
//
//         if (navBtnId + 1 != slideNow) {
//             translateWidth = -$('#viewport').width() * (navBtnId);
//             $('#slidewrapper').css({
//                 'transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//             });
//             slideNow = navBtnId + 1;
//         }
//     });
// });
//
//
// function nextSlide() {
//     if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//         $('#slidewrapper').css('transform', 'translate(0, 0)');
//         slideNow = 1;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow++;
//     }
// }
//
// function prevSlide() {
//     if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//         translateWidth = -$('#viewport').width() * (slideCount - 1);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow = slideCount;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow - 2);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow--;
//     }
// }
