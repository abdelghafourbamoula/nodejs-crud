let Userdb = require('../model/model')

// create & save user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }

    // new user
    let user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save the user
    user
    .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating an operation"
            })
        })
}

// read & return user 
exports.find = (req, res) => {
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while retreivinguser informations"
        })
    })
}

// update user identified by his id
exports.update = (req, res) => {
    
}

// delet specified user by id
exports.delete = (req, res) => {
    
}