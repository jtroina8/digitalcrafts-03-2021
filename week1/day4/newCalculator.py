number1 = int(input("First number. "))
number2 = int(input("Second number? "))
getOperand = input("And the operand? ")
optionsList = [number1, number2, getOperand]


def add(number1, number2):
    return print(number1 + number2)


def subtract(number1, number2):
    return print(number1 - number2)


def multiply(number1, number2):
    return print(number1 * number2)


def division(number1, number2):
    return print(number1 / number2)


if(getOperand) == "+":
    add(number1, number2)

if(getOperand) == "-":
    subtract(number1, number2)

if(getOperand) == "*":
    multiply(number1, number2)

if(getOperand) == "/":
    division(number1, number2)

elif(optionsList) == "q":
    print("Sorry to see you go!")
