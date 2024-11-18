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
let totalResources = document.querySelector("#resources");
let totalComp = document.querySelector("#comp");
let totalHours = document.querySelector("#time_needed");
let queries = document.querySelector("#queries");
let numberFields = [totalResources, totalHours, totalComp, queries];

let moneySavedTxt = document.querySelector("#money_saved");
let timeSavedTxt = document.querySelector("#time_saved");
let calculatorErrTxt = document.querySelector(".calc-err-txt");

let AtomicWorkCostPerEmp = 90; //annual cost in USD
let timeTakenByTool = 5; //mins taken by Atomic work took to resolve a single query

let calcSubBtn = document.querySelector(".calc-submit-button");
let revealButton = document.querySelector("#reveal_btn");

//accept only numbers in calculator fields
numberFields.forEach(function (field) {
  field.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });
});

calcSubBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //check if any field is left empty
  let isEmpty = false;
  let calcFormFields = Array.from(
    document.querySelectorAll(".calc-form-field")
  );

  calcFormFields.forEach(function (field) {
    if (field.tagName == "INPUT" && field.value.trim() == "") {
      isEmpty = true;
    } else {
      isEmpty = false;
    }
  });

  if (isEmpty) {
    //throw error
    calculatorErrTxt.style.opacity = 1;

    setTimeout(() => {
      calculatorErrTxt.style.opacity = 0;
    }, 1000);
  } else {
    //Calculating money saved
    //money saved == (total resources * comp of each resource) - cost of Atomicworks tool
    let moneySaved =
      totalResources.value * totalComp.value -
      AtomicWorkCostPerEmp * totalResources.value;

    moneySavedTxt.style.filter = "blur(12px)";

    moneySavedTxt.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(moneySaved);

    //Calculating time saved
    //time saved =( (no. of queries generated annually/number of agents) * time taken by resource to resolve a query )
    //This amount of time was dedicated by humans for solving queries, now this will be taken care of by machine
    let timeSaved = (queries.value / totalResources.value) * totalHours.value;
    timeSavedTxt.innerHTML = `${timeSaved.toFixed(2)} hrs`;

    //show revel data button
    revealButton.style.display = "block";
  }
});

//////////////////VALIDATE GET REPORT FIELD/////////////////
let reportSubmitBtn = document.querySelector(".get-report-submit-button");
let reportEmailField = document.querySelector(".get-report-form-field");
let reportErrorText = document.querySelector(".get-report-err_txt");

reportSubmitBtn.addEventListener("click", (e) => {
  //check if email is valid or not
  if (emailRegex.test(reportEmailField.value.trim())) {
  } else {
    e.preventDefault();
    reportErrorText.style.display = "block";
    reportErrorText.innerHTML = `Please enter a valid work email ID`;
  }

  //check if it is a work email, prevent submission if personal email
  let emailDomain = reportEmailField.value.trim().split("@")[1];
  if (personalEmailDomains.includes(emailDomain)) {
    e.preventDefault();
    reportErrorText.style.display = "block";
    reportErrorText.innerHTML = `We only accept work email IDs`;
  } else {
  }
});

//remove error text when field is focused
reportEmailField.addEventListener("focusin", (e) => {
  reportErrorText.style.display = "none";
});
