pets = ["doggo", "cat", "iguana", "pikachu"]
otherPets = ["mouse", "bird", "rabbit"]
people = ["bob", "sally", "will"]

cars = [
    {"name": "M3", "year": "2016",
     "color": "white"}
]
#users = ["boaab", "boaab", "boaab", "boaab"]
# you can use len to find the length of the list
# print(len(pets))

# Loop over a list
index = 0

# looping over a list, a while loop requires a condition
# while index < len(pets):
#   pet = pets[index]
#  print("What pet are you? I'm a %s" % (pet))
# index += 1
# index = index + 1, same this as above

# For loop
# count = 0
# write for, write the singular name of the lists you are looping over,
# write of, write the name of the list
# for pet in pets:
#    print(pet)
#    count += 1
# How do we combine lists?
# combinedLists = pets +otherPets
# firstlist = [1, 2, 3]
# firstList.extend([4, 5, 6])
# combinedLists = pets.extend(otherPets)
# print(firstList)

# How do we modify a list?

pets[0] = "otter"
print(pets)

del pets[0]
print(pets)
