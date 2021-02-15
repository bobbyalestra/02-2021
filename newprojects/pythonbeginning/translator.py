

# making a Python Translalor 
# making all vowels equal a certain letter


def translate(phrase):
    translation = ""
    for letter in phrase:
        if letter.lower() in "aeiou":
            if letter.isupper():
                translation = translation + "B"
            else:
                translation = translation + "b"
        else:
            translation = translation + letter
    return translation
print(translate(input("Enter A Phrase ")))