

var objPeople = [
    {
        username: "sam",
        password: "codify"
    },
    {
        username: "matt",
        password: 'academy',
    },
    {
        username: "chris",
        password: "forever"
    }
]


function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log("your username is" + username + " and your password is " + password + "   you have logged in") 
}