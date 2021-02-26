const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

// create a type degfs to long the contents of the Query you are trying to restore
// make it a const variable ann do as follows for which type, the ! makes its it a requirement
const typeDefs = gql`
    type Query {
        sayHi: String!
    }


`////


/// 

const resolvers = {
    Query: {
        sayHi: () => `Hello World!!!!!`
        
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});



server.listen({port: 5000})
// that requires a promise to we use .then
// res means a result object


.then(res => {
    console.log(`server running at ${res.url}`)
})

///must use the CMD node index to restart the server and its update