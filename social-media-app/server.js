const express = require('express');
const connectDB = require('./DB/Connections')
const app = express();
const port = process.env.PORT || 3000;



connectDB();


app.listen(port, () => console.log(`Server Has Started Kidddd!`))


app.get('./config.js', function (req, res) {
  res.send('Hello World!');
});


app.listen(port);