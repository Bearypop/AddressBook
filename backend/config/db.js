// import dependencies required for mongoose
const mongoose = require('mongoose')

// function to start up and connect to MongoDB database
const connectDB = async () => {
    try {
        // attempt to connect to MongoDB database via the connection string specified in .env file
        const con = await mongoose.connect(process.env.MONGODB_URI) // read from the .env file
        console.log(`MongoDB Connected: ${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

// export connection function to be used in index.js
module.exports = connectDB
