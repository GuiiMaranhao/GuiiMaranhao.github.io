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

buttonTop = document.querySelector(".button-top")

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

buttonTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

// === CLEAR FILTER ===

buttonClearFilter = document.querySelector("#button-clear-filter")
optionsChecked = document.querySelectorAll(".check-group input")
optionsSections = document.querySelectorAll("section")

buttonClearFilter.addEventListener("click", () => {
  for (i = 0; i < optionsChecked.length; i++)
    if (optionsChecked[i].type == "checkbox")
      optionsChecked[i].checked = false;

  for (n = 0; n < optionsSections.length; n++) {
    optionsSections[n].style.display = 'block'
  }
})


// === FILTER ===

buttonFilter = document.querySelector("#button-filter")
optionsCheckedFilter = document.querySelectorAll(".check-group input")
optionsSections = document.querySelectorAll("section")

buttonFilter.addEventListener("click", () => {
  for (i = 0; i < optionsCheckedFilter.length; i++) {
    if (optionsCheckedFilter[i].checked === true) {
      for (n = 0; n < optionsSections.length; n++) {
        if (optionsCheckedFilter[i].name === optionsSections[n].id) {
          optionsSections[n].style.display = 'block'
        }
      }
    } else {
      for (n = 0; n < optionsSections.length; n++) {
        if (optionsCheckedFilter[i].name === optionsSections[n].id) {
          optionsSections[n].style.display = 'none'
        }
      }
    }
  }
})