//TODO darken reset btn while input is zero

// Variables
const formEl = document.getElementById("form-el")
const billInput = document.getElementById("bill-input")
const peopleInput = document.getElementById("num-people-input")
let tipAmount = document.getElementById("tip-amount")
let totalAmount = document.getElementById("total-amount")

// Event Listeners
formEl.addEventListener("click", function(e) {
    e.preventDefault()
})

document.getElementById("five").addEventListener("click", function() {
    let result = calculateResult(billInput.value, 5)
    
    tipAmount.innerHTML = result
    let currentBill = billInput.value
    let total = currentBill + result
    totalAmount.innerHTML = total
})

document.getElementById("ten").addEventListener("click", function() {
    let result = calculateResult(billInput.value, 10)
    console.log(result)
})

document.getElementById("fifteen").addEventListener("click", function() {
    let result = calculateResult(billInput.value, 15)
    console.log(result)
})

document.getElementById("twenty-five").addEventListener("click", function() {
    let result = calculateResult(billInput.value, 25)
    console.log(result)
})

document.getElementById("fifty").addEventListener("click", function() {
    let result = calculateResult(billInput.value, 50)
    console.log(result)
})

// Functions
const calculateResult = (num, per) => (num/100) * per
