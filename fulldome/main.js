document.addEventListener("DOMContentLoaded", function () {
  const btnModal = document.querySelectorAll(
    "button[data-modal], a[data-modal]",
  );
  const anchorLink = document.querySelectorAll("a[data-scroll]");
  const header = document.querySelector(".header");

  //Фикс шапка(начало)
  // const headerTop = header.offsetTop;
  // window.addEventListener("scroll", function () {
  //   let scroll = window.pageYOffset;
  //   if (scroll > headerTop) {
  //     header.classList.add("header--fixed");
  //   } else {
  //     header.classList.remove("header--fixed");
  //   }
  // });
  //Фикс шапка(конец)

  //Якорные ссылки(начало)
  anchorLink.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const modalActive = document.querySelector(".modal--visible");
      if (modalActive && modalActive.classList.contains("modal--burger")) {
        modalActive.classList.remove("modal--visible");
        body.classList.remove("body--hidden");
      }

      const id = link.getAttribute("href");
      const block = document.querySelector(id);
      const blockPosition = block.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;

      let elemPosition = blockPosition - headerHeight + 50;

      window.scrollBy({
        top: elemPosition,
        behavior: "smooth",
      });
    });
  });

  const sections = Array.from(anchorLink).map((link) =>
    document.querySelector(link.getAttribute("href")),
  );

  const headerHeight = header.offsetHeight;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anchorLink.forEach((l) =>
            l.classList.remove("burger-menu__link--active"),
          );

          const activeLink = document.querySelector(
            `a[data-scroll][href="#${entry.target.id}"]`,
          );

          activeLink?.classList.add("burger-menu__link--active");
        }
      });
    },
    {
      rootMargin: `-${headerHeight}px 0px -60% 0px`,
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
  //Якорные ссылки(конец)

  // Открытие и закртие модалок(начало)
  btnModal.forEach((item) => {
    item.addEventListener("click", function (e) {
      disableScroll();
      e.preventDefault();

      const modalActive = document.querySelector(".modal--visible");

      if (modalActive) {
        modalActive.classList.remove("modal--visible");
        body.classList.remove("body--hidden");
      }

      const getAttr = item.getAttribute("data-modal");
      listenModal(getAttr);
    });
  });

  function listenModal(nameModal) {
    disableScroll();
    const modal = document.querySelector(`.modal[data-modal="${nameModal}"]`);
    console.log("modal", modal);
    console.log("name", nameModal);

    modal.classList.add("modal--visible");
    body.classList.add("body--hidden");
    modal.addEventListener("click", function (e) {
      if (
        e.target.classList == "modal__close" ||
        e.target.classList[0] == "modal"
      ) {
        enableScroll();
        modal.classList.remove("modal--visible");
        body.classList.remove("body--hidden");
      }
    });
  }

  let disableScroll = function () {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
    body.style.paddingRight = paddingOffset;
  };

  let enableScroll = function () {
    body.style.paddingRight = "0px";
  };
  // Открытие и закртие модалок(конец)

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

  resizableSwiper("(max-width: 768px)", ".where__swiper", {
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
