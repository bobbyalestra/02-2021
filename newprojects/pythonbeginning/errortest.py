
#working with different errors




#trying to set the number variable to an integer input
# like this it will throw an error if you enter a letter


#number = int(input("Enter A Number: "))
#print(number)



# by adding the try and indenting the variable and function it can execute the code and if it doesnt work nott give a throw error

try:
    value = 10/0
    numbers = int(input("Enter A Number: "))
    print(numbers)


# adding as can assign it as a variable
except ZeroDivisionError as err:
    print(err)
except ValueError:
    print("Invalid Input")