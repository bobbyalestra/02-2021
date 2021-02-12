
# working with arrays
luckyNums = [ 32, 26, 3]
family = [ "Bobby", "Sammy", "Aron" ]
print(family)

# use bracket notation to find the oindex

print(family[1])

# adding a negative value to a number it will print the result backards that many

print(family[1])


# to gab an element and switch it

family[1] = "BabyGirl"

print(family[1:2])

#the entend()

print(family.extend(luckyNums))


#    append  adds another element toi appended element
family.append("Cameron")
print(family)

# insert takes two parameters first is the lelement you want to inserts locations , second is the element you want inserted

print(family.insert(1,"Beatiful Baby Girl"))


print(family)

# the pop function removes the last item in the array


print(family.pop())



# index can locate a specific element
print(family.index("BabyGirl"))



# the count method will tell you how many times an element appears in an array
print(family)


# sort puts array in alabetical order

friends.sort()