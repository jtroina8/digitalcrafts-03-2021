word1 = input("Input word 1")
word2 = input("Input word 2")

letters = ["a", "e", "i", "o", "u", "y", "b", "c", "d", "f", "g", 'h', 'j', 'k', 'l', 'm',
           'n', 'l', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

word1_letters = []
word2_letters = []

for letter in word1:
    word1_letters.append(letter)
for letter in word2:
    word2_letters.append(letter)

# both names have the same amount of consonants/vowels


def letters(word1, word2, the_letters):
    word1_letters = {}
    word2_letters = {}
    # global score
    for character in word1:
        if character in the_letters:
            try:
                word1_letters[word1] = True
            except KeyError:
                word1_letters[word1] = True
    for character in word2:
        if character in the_letters:
            try:
                word2_letters[word2] = True
            except KeyError:
                word2_letters[word2] = True
    for key in word1_letters:
        if key in word2_letters:
            return print("This is true")
