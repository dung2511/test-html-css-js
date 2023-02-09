$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: false,
    infinite: false,
    initialSlide: 0,
    slidesToScroll: 0,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
  $(".slider_2").slick({
    arrows: false,
    dots: false,
    infinite: false,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
  $(".slider_3").slick({
    arrows: false,
    dots: false,
    infinite: false,
    initialSlide: 0,
    slidesToScroll: 0,
    slidesToShow: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  });
  $(".slider_4").slick({
    arrows: false,
    dots: false,
    infinite: false,
    initialSlide: 0,
    slidesToScroll: 0,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  });
});
