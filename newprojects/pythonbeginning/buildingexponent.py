
#building exponents
# using ** can do it 


print(2**3)


#using a function
# create a function with two parameters
# make a variable for the result
#make a for loop
# index in range of the number to blankth power
# makong the index equal 1 each time it loops through the the base number will start times 1 equalling itself then continuing the loop until it reaches the power

def raisingPower(base_num, power_num):
    result = 1
    for index in range(power_num):
        result = result * base_num
