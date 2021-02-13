

# step one declare a variable for the secret word and an empty string to store your guesses
# create a while loop with the conditions of your guess not equal to the secret word
# make the guess initializer equal an input telling the user to enter their guess
# will continue to run loop until you guess the secret word


# set a guess variable
# add  the guess count and it crement it once for each guess
# add a guess limit variable
# create another varibale called out of guess...a boolean value so if its true the are out of guesses false equals ore chances
# add an if statement inside of the while loop to check first to see if they are out of chances by making the condition if guess count is less than count limit

secret_word = "BabyGirl"
guess = ""
guess_count = 0
guess_limit = 3
out_of_guesses = True



while guess != secret_word:
    if guess_count < guess_limit 
    guess = input("Enter Guess : ")
    guess_count += 1
print("You Win")