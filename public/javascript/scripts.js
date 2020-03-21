// === NAVBAR ===

let menuShow = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
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
