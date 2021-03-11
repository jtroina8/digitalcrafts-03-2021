number = int(
    input("Find out if the number you're thinking of is Odd or Even! "))
if number == 0:
    print("%s is Neutral. What a surprise!" % (number))
elif (number % 2) == 0:
    print("%s is Even. Wonderful!" % (number))
else:
    print("%s is Odd. How exciting!" % (number))
