

#reading from external files in Python

# first is to  open file in python  open()
# first mode is read "r" only read

open("employees.txt", "r")


#second mode is write "w" to write to the file
open("employees.txt", "w")


# third way is apeend "a" to add to the specific file at the end, cant mmodify or change
open("employees.txt", "a")


# fourth is r+ giving you the ability to read an write
open("employees.txt", "r+")




# generally you will want to add a variable to the open functio0n so you dont constantly refer to its whole path



employee_file = open("employees.txt", "r")


#when you open a file you ALWAYS WANT TO CLOSE IT


employee_file.close()