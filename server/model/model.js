const mongose = require('mongose');

let schema = new mongose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    gender: String,
    status: String
})

const Userdb = mongose.model('userdb', schema)

module.exports = Userdb;