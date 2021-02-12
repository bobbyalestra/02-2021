


# if statements ahve a certain structure
# the or key word will allow either condirtions
# and frequires both

is_male = True
is_tall = False

if is_male and is_tall:
    print("you are a male or tall or both")
elif is_male and not(is_tall):
    print(" you are a short male")
elif not is_male and (is_tall):
    print("you are not a male but you aare tall")
else:
    print("not man not tall ")