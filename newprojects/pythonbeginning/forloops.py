


# used to loop over different collections of items
# start with for
# name of the collection
# then use the keyword in what you want to go through ie string finish with a colon
# name function 



# index in range() will print out each number second nuumber not included
# can add two parameter 3, 10
for index in range(3, 10):
    print(index)

family_members = ["Daddy", "Mummy", "Cameron", "Aron", "Litte Princess"]


for letter in "BabyGirl" :
    print(letter)



for family in family_members :
    print(family)


# adding the length function len(parameter) wll tell you how many charaters there are in the parameter

print(len(family))

#can  find the index range of  collection as follows with index and in range

for index in range(len(family)):
    print(family[index])

print(family)


# if you only wanteds to orint a range of an index
for index in range(5):
    if index == 0:
        print("first itteration")
    else:
        print("Not first")