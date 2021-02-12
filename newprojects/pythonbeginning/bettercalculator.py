# start off by making the first three vairables



num1 = float(input("Enter your first Number: "))
operator = input("Enter your Operator: ")
num2 = float (input("Enter your SecondNumber: "))



if operator == "+":
    print(num1 + num2)
elif operator == "-":
    print(num1 - num2)
elif operator == "*":
    print(num1 * num2)
elif operator == "/":
    print(num1 / num2)
else:
    print("Invalid Operator")