const mongose = require('mongoose');

let connectDB = async () => {
    try {
        // mongodb connection string 
        let con = await mongose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log(`MongoDB Connected:${con.connection.host}`)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;