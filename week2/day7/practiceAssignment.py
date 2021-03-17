# 1
# Create a User class, that has the  ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# Create a function that asks you to give the user a name, and give the user an age,
# and will then create the user for you, and print it to the screen.
# The user will have a choice to either be a temp user or a User

class User:
    def __init__(self, name, age,):
        self.name = name
        self.age = age


class TempUser:
    def __init__(self, name):
        self.name = name


def welcomeMessage():

    message = input("""
    Welcome new customer! Let's get you signed up.

    Would you like to join as a User or a TempUser?
    """)

    return message


if input == "User":
    print("Okay, User! What is your name? ")
