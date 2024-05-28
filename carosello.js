// EVENTO SCROLL

let navbar = document.querySelector(".navbar")


window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("nav-scrolled")
    } else {
        navbar.classList.remove("nav-scrolled")
    }
})

let numUsers = document.querySelector("#numUsers")
let numArticles = document.querySelector("#numArticles")
let numComments = document.querySelector("#numComments")


// SWIPER JS 
const swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});