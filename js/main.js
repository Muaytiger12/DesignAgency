$('.slider__wrapper').slick({
 infinite: true,
 slidesToShow: 2,
 slidesToScroll: 1,
 arrows: true,
 appendArrows: $('.heading__arrows'),
 prevArrow: $('.heading__arrows-prev'),
 nextArrow: $('.heading__arrows-next'),
 waitForAnimate: false,
 responsive: [
  {
   breakpoint: 990,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
   }
  
 },
 {
  breakpoint:430,
  settings:{
   vertical: true,
   verticalSwiping: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   infinite:true,
  }
 }
]
})

$('.burger').on('click', function (e) {
 e.preventDefault()
 $('.header__top').toggleClass('open'),
  $('.overlay').toggleClass('overlay--show')
})