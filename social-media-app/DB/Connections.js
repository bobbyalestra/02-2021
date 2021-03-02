const mongoose = require('mongoose');

// const URI = 'mongodb+srv://Robar:Alestra@socialmediaapp.1wax2.mongodb.net/test?retryWrites=true&w=majority?authSource=admin'

const URI = "mongodb+srv://Robar:Robar@socialmediaapp.1wax2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


const connectDB =  ()=>{
      mongoose.connect(URI, {
       useUnifiedTopology: true,
       useNewUrlParser: true 
   });
   console.log('Connected to your DB kidddd')
}

module.exports = connectDB;