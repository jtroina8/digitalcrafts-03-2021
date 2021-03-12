# Type of a function
# built in function for python
# print("")
# len(2)

# print(1 + 3)
# defining a function
# the word "def", the name of the function, parenthesis (), then a colon :
# in the body of the function, you need a return statement


def printMessage():
    return print("haiiiiiii")


def add(number1, number2):
    return number1 + number2


def multiply(number1, number2):
    return number1 * number2


def subtract(number1, number2):
    return number1 - number2


def division(number1, number2):
    return print(number1 / number2)


# ask for input, take that string, and print it out, all in a function
askUserToType = input("Type in a word: ")
askUserToTypeAgain = input("Type in another word: ")


def printWhatUserTyped(firstMessageTyped, secondMessageTyped):
    # Local Variable
    combinedMessage = firstMessageTyped + " " + secondMessageTyped
    print(askUserToType)
    return print(combinedMessage)


# SCOPE
# SCOPE is about having access to certain things in your program
# Global scope, means anyone can access this variable,function from anywhere inside your program
# Local scope, or LEXICAL SCOPE, means you only have access to certain variables INSIDE of a specific place

printWhatUserTyped(askUserToType, askUserToTypeAgain)

# printMessage()
# Your assignment to redo your calculator
# getFirstNUmber = input("Gimme a number")
# getSecondNUmber = input("Gimme a second number")
# getOperand = input("Gimme a Operand")

# if (getOperand == "/")
# division(getFirstNUmber, getSecondNUmber)

# print(add(1, 2))
