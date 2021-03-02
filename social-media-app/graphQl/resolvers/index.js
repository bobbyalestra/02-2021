


const user = require('../../models/user');
const postsResolvers = require('./posts');
const usersResolvers = require('./users');

module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
}