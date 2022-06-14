const mongose = require('mongose');

const connectDB = async () => {
    try {
        // mongodb connection string 
        let con = await mongose.connect(process.env.MONGO_URI, {
            useNewParser: true,
            useUnifedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected:${con.connection.host}`)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.export = connectDB;