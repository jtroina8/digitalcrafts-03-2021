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
