

# step one declare a variable for the secret word and an empty string to store your guesses
# create a while loop with the conditions of your guess not equal to the secret word
# make the guess initializer equal an input telling the user to enter their guess
# will continue to run loop until you guess the secret word


# set a guess variable
# add  the guess count and it crement it once for each guess
secret_word = "BabyGirl"
guess = ""
guess_count = 0


while guess != secret_word:
    guess = input("Enter Guess : ")
    guess_count += 1
print("You Win")