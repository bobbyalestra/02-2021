



import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        //database Name
        const databaseName='Database1';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${Database1}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB