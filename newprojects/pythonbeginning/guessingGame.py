

# step one declare a variable for the secret word and an empty string to store your guesses
# create a while loop with the conditions of your guess not equal to the secret word
# make the guess initializer equal an input telling the user to enter their guess
# will continue to run loop until you guess the secret word


# set a guess variable
# add  the guess count and it crement it once for each guess
# add a guess limit variable
# create another varibale called out of guess...a boolean value so if its true the are out of guesses false equals ore chances
# add an if statement inside of the while loop to check first to see if they are out of chances by making the condition if guess count is less than count limit
# check for proper indentation!
# finish with an else statement t equal out of guesses = true

#finish it by adding to the while loop guess not equal to secret word and not out of guesses to make it run all the conditions
secret_word = "BabyGirl"
guess = ""
guess_count = 0
guess_limit = 3
out_of_guesses = True



while guess != secret_word and not out_of_guesses:
    if guess_count < guess_limit: 
        guess = input("Enter Guess : ")
        guess_count += 1
    else:
        out_of_guesses = True
if out_of_guesses:
    print("Out of Guesses")
else:
    print("You Win")