

# making a Python Translalor 
# making all vowels equal a certain letter


def translate(phrase):
    translation = ""
    for letter in phrase:
        if letter in "AEIOUaeiou":
            translation = translation + "B"
        else:
            translation =  translattion + letter
        return translate
