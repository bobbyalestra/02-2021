const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphQl/typedefs') 
const resolvers = require('./graphQl/resolvers')
const { MONGODB } = require('./config.js')

// create a type degfs to long the contents of the Query you are trying to restore
// make it a const variable ann do as follows for which type, the ! makes its it a requirement



const server = new ApolloServer({
    typeDefs,
    resolvers
});

// next we need to connect to mongoDB using mongoose.connect("Connection String Here") and get the cpnnection string

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true,})
        .then(() => {
            console.log('MongoDB Coneccted Kidddd')
        return server.listen({ port: 5000})
    }) 
        .then((res) => {
            console.log(`server running at ${res.url}`)
    });

// that requires a promise to we use .then
// res means a result object



///must use the CMD node index to restart the server and its update




//connect to the database
