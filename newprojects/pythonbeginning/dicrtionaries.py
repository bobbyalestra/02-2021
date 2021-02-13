


# key : value pairs 



monthConversion = {

    "Jan" : "January",
    "Feb" : "February",
    "Mar" : "March",
    "Apr" : "April",
    "May" : "May",
    "Jun" : "June",
    "Jul" : "July",
    "Aug" : "August",
    "Sept": "September",
    "Oct" : "October",
    "Nov" : "Novemeber",
    "Dec" : "Decemeber",
# Can also store Number types 
    5 : "Days"
}


# to acces it key you can use bracket notation []
print(monthConversion["Feb"])

#another way is .get("key")
# .get can also set default key/value pairs using Object.get("Key", "Value")
print(monthConversion.get("Nov"))
print(monthConversion.get("Sammy", "BabyGirl"))
print(monthConversion.get(5))