function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

// HAMBURGER_________________________________________________________________________
let hamburger = document.querySelector(".header__burger");
let nav = document.querySelector(".header__nav");

if(hamburger, nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  
    document.body.classList.toggle("lock");
  });
}

let loginModal = document.querySelector(".header__acc--mess");
let aside = document.querySelector(".aside");

if(loginModal, aside) {
  loginModal.addEventListener("click", () => {
    aside.classList.toggle("active");
  });
  
}

// NAVLINK=================================================================

let navLink = document.querySelectorAll(".header__nav--link")

// navLink.forEach(e => {
//   return e.addEventListener("click", ()=>{
//     clearActiveClass()
//     e.classList.add("active")
//   })
// })

// function clearActiveClass() {
//   navLink.forEach(e => {
//     e.classList.remove("active")
//   })
// }

$(navLink).filter(function(){
  return this.href === location.href;
}).addClass('active');

let loginAcc = document.querySelector(".header__acc--login");
let loginMenu = document.querySelector(".header__menu");

if(loginAcc, loginMenu) {
  loginAcc.addEventListener("click", () => {
    loginMenu.classList.toggle("active");
  });
  
}



// TAB=--------==-------------------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let navTab = document.querySelectorAll(".bargaining__nav--link")
let tab = document.querySelector(".bargaining__tab")

if(navTab, tab) {

  navTab[2].addEventListener("click", () => {
    tab.classList.toggle("active")
  })
}


// SLIDER __________________________________________________________________

let sliderInner = document.querySelector(".slider__inner")

if(sliderInner) {
  $(sliderInner).slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  
}