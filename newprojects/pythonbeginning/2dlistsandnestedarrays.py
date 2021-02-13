


number_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]


# will print the first index in the first array
print(number_grid[0][0])

# will print number 0
print(number_grid[3][0])


for row in number_grid:
 # prints out the list as its nested   
    print(row)
# will make each fist index into its own column
    for col in row:
        print(col)