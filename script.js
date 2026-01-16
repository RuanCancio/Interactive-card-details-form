let numbercard = document.querySelector(".number")
let expdate = document.querySelector(".exp-date")
let cvc1 = document.querySelector(".cvc1")
let cvc2 = document.querySelector(".cvc2")
const cardholder = document.querySelector("#cardholder")
const cardnum = document.querySelector("#card")
const expmm = document.querySelector("#exp")
const expyy = document.querySelector("#exp2")

cardnum.addEventListener("input", ()=> {
    numbercard.textContent = cardnum.value
})

cardholder.addEventListener("input", ()=> {
    expdate.textContent = cardholder.value
})

expmm.addEventListener("input", ()=> {
    cvc1.textContent = `${expmm.value}/`
})

expyy.addEventListener("input", ()=> {
    cvc2.textContent = expyy.value
})


const btnenv = document.getElementById("btnenv")
const btnback = document.getElementById("btnback")

const form = document.querySelector(".form")
const success = document.querySelector(".success")

btnenv.addEventListener("click", () => {
    form.classList.add("off")
    success.classList.remove("off")
})

btnback.addEventListener("click", () => {
    success.classList.add("off")
    form.classList.remove("off")
})
