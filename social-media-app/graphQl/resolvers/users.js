
// create a constant for the user and have it require the User file for mutations
const user = require('../../models/User');


module.exports = {
    Mutation: {
        register(parent, args, context, info)
    }
}