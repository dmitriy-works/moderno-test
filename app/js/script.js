$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    readOnly: true,
    starWidth: "12px"
  });

  $(".products-slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $(".js-range-slider").ionRangeSlider({
        type: "double",       
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
      $('.products__item').addClass('list');
      $('.icon-th-large').removeClass('active');
      $('.icon-th-list').addClass('active');
    });

    $('.icon-th-large').on('click', function(){
      $('.products__item').removeClass('list');
       $('.icon-th-list').removeClass('active');
       $('.icon-th-large').addClass('active');
      
      
    });

    

  var mixer = mixitup('.products__inner-box');
});