// === NAVBAR ===

let menuShow = true;

const menuSection = document.querySelector(".navbar-end")
const menuBurguer = document.querySelector(".navbar-burguer")

menuBurguer.addEventListener("click", () => {
    document.body.style.overflow = menuShow ? "hidden" : "initial"
    menuSection.classList.toggle("active", menuShow)
    menuShow = !menuShow;
})



// === CARD FILTER ===

let cardShow = true;

const cardBody = document.querySelector(".card-body")
const cardAction = document.querySelector(".card-header-action")

cardAction.addEventListener("click", () => {
    cardBody.classList.toggle("active", cardShow)
    cardAction.querySelector("i").innerText = cardShow ? "expand_less" : "expand_more" 
    cardAction.querySelector("span").innerText = cardShow ? "OCULTAR" : "MOSTRAR" 

    cardShow = !cardShow
})


// ===  BUTTON TOP ===

mybutton = document.querySelector(".button-top")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

