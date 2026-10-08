// Become slider (Swiper)
document.addEventListener("DOMContentLoaded", function () {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback,
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper("(max-width: 768px)", ".hero__swiper", {
    slidesPerView: "auto",
    // freeMode: false,
    grabCursor: true,
    // navigation: {
    //   nextEl: ".yourself__next",
    //   prevEl: ".yourself__prev",
    // },
    // scrollbar: {
    //   el: ".yourself__scrollbar",
    //   draggable: true,
    // },
    breakpoints: {
      768: {
        spaceBetween: 12,
      },
      0: {
        spaceBetween: 8,
      },
    },
  });
});
