$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    infinite: false,
    slidesToShow: 8,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  });
  $(".slider_4").slick({
    arrows: false,
    // dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true,
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
});
$(".slider_5").slick({
  arrows: false,
  // dots: true,
  infinite: false,
  initialSlide: 0,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
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
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
const hamburger = document.querySelector(".hamburger");
const menuNav = document.querySelector(".nav_list_item");

hamburger.onclick = function () {
  menuNav.classList.toggle("active");
};
