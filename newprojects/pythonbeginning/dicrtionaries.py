


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
    "Dec" : "Decemeber"

}


# to acces it key you can use bracket notation []
print(monthConversion["Feb"])

#another way is .get("key")
print(monthConversion.get("Nov"))