


# more work with if statements and comparisons

# started off creatting th3 function max+num
# gave it threem parameters
# made an if statement to compare if num1 is greater than or equal to num2 ANDS num is greater than or equal to num3


def max_num(num1, num2, num3):

    #if all comparisons are true then num1 is largest
    if num1 >= num2 and num1 >=num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    else:
        return num3