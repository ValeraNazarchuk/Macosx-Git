$(function(){

$('.bike-slider, .slider__items').slick({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.menu__link, .bike__link').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 650,   // по умолчанию «400» 
      easing: "linear" // по умолчанию «swing» 
  });

  return false;
});

setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header').hasClass('header__open') === false){
  $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
}, 0)

$('.burger, .overlay, .menu a, .bike__link a').on('click', function (e) {
  e.preventDefault()
  $('.header').toggleClass('header__open')
  $('.overlay').toggleClass('overlay--show')
  $('.burger').toggleClass('burger--active')
})

});