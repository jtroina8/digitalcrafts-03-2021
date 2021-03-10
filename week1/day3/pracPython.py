nameOfUser = input("Hello! What is your name? ")
lengthOfUserName = len(nameOfUser)

while(lengthOfUserName < 1):
    nameOfUser = input("No, your name! ")
    lengthOfUserName = len(nameOfUser)

nameOfUserLast = input("Great! What is your last name? ")
lengthOfUserLast = len(nameOfUserLast)

while(lengthOfUserLast < 1):
    nameOfUserLast = input("Your last name! ")
    lengthOfUserLast = len(nameOfUserLast)

nameOfFriend = input("Amazing! Who are you signing up with? ")
lengthOfFriend = len(nameOfFriend)

while(lengthOfFriend < 1):
    nameOfFriend = input("Come on! Give us a friends name! ")
    lengthOfFriend = len(nameOfFriend)

nameOfFriendLast = input("Almost done! What's their last name? ")
lengthOfFriendLast = len(nameOfFriendLast)

while(lengthOfFriendLast < 1):
    nameOfFriendLast = input("Everyone has a last name... except Prince ")
    lengthOfFriendLast = len(nameOfFriendLast)

print("Welcome to our newest members! %s %s is friends with %s %s." %
      (nameOfUser, nameOfUserLast, nameOfFriend, nameOfFriendLast))
