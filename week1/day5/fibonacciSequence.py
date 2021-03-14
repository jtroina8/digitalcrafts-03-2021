odd, even = 0, 1
total = 0
while True:
    odd, even = even, odd + even
    if even >= 4000000:
        break
    if even % 2 == 0:
        total += even
print(total)
