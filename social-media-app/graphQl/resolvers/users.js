
// create a constant for the user and have it require the User file for mutations


const bcrypt = require('bcrypths')
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../../config/')
const User = require('../../models/User');



module.exports = {
    Mutation: {
        async register(_, 
            {
                registerInput : {username, email, password, comfirmPassword} 
        },
         context, 
         info)
         
         {
           //tTODO validate user data
           // TODO Makes sure user doesnt alreaxy exist
           //hash password and create auth token 
           password = await bcrypt.hash(password, 12)

           const newUser = new User({
               email,
               username,
               password,
               createdAt: new Date().toISOString()
           });

           const res = await newUser.save();
           
           
           const token = jwt.sign({
               id: res.id,
               email: res.email,
               username: res.username
           }, SECRET_KEY, { expiresIn: '1h'});
           return {
               ...res._doc,
               id: res._id,
               token,
           };
        }
    }
};