
#working with different errors




#trying to set the number variable to an integer input
# like this it will throw an error if you enter a letter
number = int(input("Enter A Number: "))
print(number)



# by adding the try and indenting the variable and function it 

try:
    numbers = int(input("Enter A Number: "))
    print(numbers)
except:
    print("Invalid Input")