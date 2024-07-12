
let currentOperand = ''
let previousOperand = ''
let operation = null

const display = document.getElementById('display')

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.'))
        return
    currentOperand = currentOperand.toString() + number.toString()
    updateDisplay()
}

function updateDisplay() {
    display.value = currentOperand
}

function chooseOperation(op) {
    if (currentOperand === '')
        return
    if (previousOperand !== '') {
        compute()
    }
    operation = op
    previousOperand = currentOperand
    currentOperand = ''
}

function compute() {
    let computation
    const first = parseFloat(previousOperand)
    const second = parseFloat(currentOperand)
    if (isNaN(first) || isNaN(second))
        return
    switch (operation) {
        case '+':
            computation = first + second;
            break;
        case '-':
            computation = first - second;
            break;
        case '*':
            computation = first * second;
            break;
        case '/':
            computation = first / second;
            break;
        default:
            return;
    }
    currentOperand = computation
    operation = null
    previousOperand = ''
    updateDisplay()
}

function clearDisplay() {
    currentOperand = ''
    previousOperand = ''
    operation = null
    updateDisplay()
}

alert("OHAYOO, ONIICHAN!")


