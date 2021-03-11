# Program to determine if a number is Odd or Even
# If the number is divisible by 2, it is even.
# If the remainder is 1, then it is odd.

number = int(
    input("Find out if the number you're thinking of is Odd or Even! "))
if number == 0:
    print("%s is Neutral. What a surprise!" % (number))
elif (number % 2) == 0:
    print("%s is Even. Wonderful!" % (number))
else:
    print("%s is Odd. How exciting!" % (number))

# We set the variable as an integer.
# Then we set an "if, else" that determines our answer.
# In this situation, 0 is considered an Even number.
# To change that, maybe I can add a while()?

# it did not work at all. I tried putting while(num < 1, > 0, < 0) and got syntax errors.
# I figured I should just input it manually above. It worked, but I got two results. Neutral and Even.
# I fixed that problem by changing the "if" to "elif", and everything worked! :)
