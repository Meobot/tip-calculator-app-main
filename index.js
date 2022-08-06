// Variables
const formEl = document.getElementById("form-el")
const billInput = document.getElementById("bill-input")
const peopleInput = document.getElementById("num-people-input")
const tipAmount = document.getElementById("tip-amount")
const totalAmount = document.getElementById("total-amount")
const resetBtn = document.getElementsByClassName("reset-btn")
const customTip = document.getElementById("custom-tip-input")

// Event Listeners
formEl.addEventListener("click", e => {
    e.preventDefault()
})

customTip.addEventListener("change", () => {
    let tip = calculateTip(billInput.value, customTip.value)
    calculateFinal(tip)
})

document.getElementById("five").addEventListener("click", () => {
    let tip = calculateTip(billInput.value, 5)
    calculateFinal(tip)
})

document.getElementById("ten").addEventListener("click", () => {
    let tip = calculateTip(billInput.value, 10)
    calculateFinal(tip)
})

document.getElementById("fifteen").addEventListener("click", () => {
    let tip = calculateTip(billInput.value, 15)
    calculateFinal(tip)
})

document.getElementById("twenty-five").addEventListener("click", () => {
    let tip = calculateTip(billInput.value, 25)
    calculateFinal(tip)
})

document.getElementById("fifty").addEventListener("click", () => {
    let tip = calculateTip(billInput.value, 50)
    calculateFinal(tip)
})

resetBtn[0].addEventListener("click", () => {
    resetBtn[0].classList.remove("active")
    billInput.value = ""
    peopleInput.value = ""
    customTip.value = ""
    tipAmount.textContent = "$0.00"
    totalAmount.textContent = "$0.00"
})

// Functions
const calculateTip = (num, per) => (num/100) * per

const calculateFinal = tip => {
    let total = parseInt(billInput.value) + tip
    let perPerson = peopleInput.value
    let final = (total / perPerson)
    tipAmount.textContent = tip.toFixed(2) / perPerson
    totalAmount.textContent = final.toFixed(2)
    resetBtn[0].classList.add("active")
}