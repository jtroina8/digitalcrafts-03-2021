# First step to creating a caculator in Python is to promt the program to
# ask for two numbers.

# number1 = input('Enter first number: ')
# number2 = input('Enter second number: ')

# Problem: able to enter whatever you want (numbers, words, symbols)

# Solution: turn the inputs into an Interger or Float
# number1 = int(input('Enter first number: '))
# number2 = int(input('Enter second number: '))
# How can I make an error message for entering text?

# Now make it do math:
# print(number1 + number2)
# Works, but looks ugly. Fix with string formatters.

# Addition
# print('%s + %s = ' % (number1, number2))
# print(number1 + number2)

# Subtraction
# print('%s - %s = ' % (number1, number2))
# print(number1 - number2)

# Multiplication
# print('%s * %s = ' % (number1, number2))
# print(number1 * number2)

# Division
# print('%s / %s = ' % (number1, number2))
# print(number1 / number2)

# Problem: All 4 methods appear when numbers are entered
# Solution: Instruct USER to indicate which operator symbol needed (+,-,*,/)

# symbol = input('''
# Please type in the math operation you would like to complete:
# + for addition
# - for subtraction
# * for multiplication
# / for division
''')

number1 = int(input('Enter first number: '))
number2 = int(input('Enter second number: '))

print('%s + %s = ' % (number1, number2))
print(number1 + number2)

print('%s - %s = ' % (number1, number2))
print(number1 - number2)

print('%s * %s = ' % (number1, number2))
print(number1 * number2)

print('%s / %s = ' % (number1, number2))
print(number1 / number2)

# First part works, but every equation still pops up. 
# Solution: use 'if' and 'elif' (else if)

symbol = input('''

symbol = input('''
Please type in the math operation you would like to complete:
+ for addition
- for subtraction
* for multiplication
/ for division
''')

number1 = int(input('Enter first number: '))
number2 = int(input('Enter second number: '))

if symbol == '+':
    print('%s + %s = ' % (number1, number2))
    print(number1 + number2)

elif symbol == '-':
    print('%s - %s = ' % (number1, number2))
    print(number1 - number2)

elif symbol == '*':
    print('%s * %s = ' % (number1, number2))
    print(number1 * number2)

elif symbol == '/':
    print('%s / %s = ' % (number1, number2))
    print(number1 / number2)

else:
    print('NOT A VALID OPERATOR! Please run the program again!')
# Answers my question from before from line 12
# Credit tutorial source: https://www.digitalocean.com/community/tutorials/how-to-make-a-calculator-program-in-python-3
