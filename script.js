///////////////SLIDER FUNCTIONALITY//////////////////////////
const swiper = new Swiper(".swiper", {
  speed: 700,
  freeMode: true,
  autoHeight: false,
  slideToClickedSlide: true,
  slidesPerView: 1,
  spaceBetween: 8,
  rewind: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    // mobile landscape
    480: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    // tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // desktop
    992: {
      slidesPerView: 3,
      spaceBetween: 36,
    },
  },

  pagination: {
    el: ".swiper-bullet-wrapper",
    bulletActiveClass: "is-active",
    bulletClass: "swiper-bullet",
    bulletElement: "button",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
    disabledClass: "is-disabled",
  },

  slideActiveClass: "is-active",
  slideDuplicateActiveClass: "is-active",
});

//////////////////VALIDATE EMAIL FIELD////////////////////
let submitBtn = document.querySelector(".submit-button");
let emailField = document.querySelector(".form-field");
let errorText = document.querySelector(".err_txt");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let personalEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
];

submitBtn.addEventListener("click", (e) => {
  //check if email is valid or not
  if (emailRegex.test(emailField.value.trim())) {
  } else {
    e.preventDefault();
    errorText.style.display = "block";
    errorText.innerHTML = `Please enter a valid work email ID`;
  }

  //check if it is a work email, prevent submission if personal email
  let emailDomain = emailField.value.trim().split("@")[1];
  if (personalEmailDomains.includes(emailDomain)) {
    e.preventDefault();
    errorText.style.display = "block";
    errorText.innerHTML = `We only accept work email IDs`;
  } else {
  }
});

//remove error text when field is focused
emailField.addEventListener("focusin", (e) => {
  errorText.style.display = "none";
});

/////////////////////HERO TEXT ANIMATION////////////////////////////
let tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
});

function desktopAnimation() {
  tl.set("#word_1", {
    yPercent: 0,
  });

  tl.to("#word_1", {
    delay: 1,
    yPercent: -102,
    ease: "sine.inOut",
  });

  tl.to(
    "#word_2",
    {
      yPercent: -100,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    ".dept-wrapper",
    {
      width: "297px",
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to("#word_2", {
    yPercent: -202,
    ease: "sine.inOut",
    delay: 1,
  });

  tl.to(
    ".dept-wrapper",
    {
      width: "238px",
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    "#word_3",
    {
      yPercent: -200,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to("#word_3", {
    yPercent: -300,
    ease: "sine.inOut",
    delay: 1,
  });

  tl.fromTo(
    "#word_1",
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    ".dept-wrapper",
    {
      width: "347px",
      ease: "sine.inOut",
    },
    "<"
  );
}

function tabletAnimation() {
  tl.set("#word_1", {
    yPercent: 0,
  });

  tl.to("#word_1", {
    delay: 1,
    yPercent: -102,
    ease: "sine.inOut",
  });

  tl.to(
    "#word_2",
    {
      yPercent: -100,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    ".dept-wrapper",
    {
      width: "237px",
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to("#word_2", {
    yPercent: -202,
    ease: "sine.inOut",
    delay: 1,
  });

  tl.to(
    ".dept-wrapper",
    {
      width: "191px",
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    "#word_3",
    {
      yPercent: -200,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to("#word_3", {
    yPercent: -300,
    ease: "sine.inOut",
    delay: 1,
  });

  tl.fromTo(
    "#word_1",
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    ".dept-wrapper",
    {
      width: "278px",
      ease: "sine.inOut",
    },
    "<"
  );
}

function mobileAnimation() {
  tl.set("#word_1", {
    yPercent: 0,
  });

  tl.to("#word_1", {
    delay: 1,
    yPercent: -102,
    ease: "sine.inOut",
  });

  tl.to(
    "#word_2",
    {
      yPercent: -100,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    ".dept-wrapper",
    {
      width: "158px",
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to("#word_2", {
    yPercent: -202,
    ease: "sine.inOut",
    delay: 1,
  });

  tl.to(
    ".dept-wrapper",
    {
      width: "127px",
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    "#word_3",
    {
      yPercent: -200,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to("#word_3", {
    yPercent: -300,
    ease: "sine.inOut",
    delay: 1,
  });

  tl.fromTo(
    "#word_1",
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      ease: "sine.inOut",
    },
    "<"
  );

  tl.to(
    ".dept-wrapper",
    {
      width: "185px",
      ease: "sine.inOut",
    },
    "<"
  );
}

if (window.matchMedia("(max-width: 768px)").matches) {
  //Mobile animation
  mobileAnimation();
}

if (window.matchMedia("((min-width: 768px) and (max-width: 991px))").matches) {
  //Tablet animation
  tabletAnimation();
}

if (window.matchMedia("(min-width: 991px)").matches) {
  //Desktop animation
  desktopAnimation();
}

/////////////////////ROI CALCULATOR////////////////////////
