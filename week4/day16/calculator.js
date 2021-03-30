function calculate(num1, num2, operand) {
    if (operand === "*") { 
        return num1 * num2
    } else if (operand === "/") { 
        return num1 / num2
    } else if (operand === "+") { 
        return num1 + num2
    } else if (operand === "-") { 
        return num1 - num2}
}

console.log(`Your answer is ${calculate(5,5, "+")}`)