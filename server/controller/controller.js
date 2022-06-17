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
            // res.send(data)
            res.redirect('/!')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating an operation"
            })
        })
}

// read & return user 
exports.find = (req, res) => {
    
    if(req.query.id){
        let id = req.query.id
        Userdb.findById(id)
        .then(data =>{
            if (! data)
                res.status(404).send({message: `Not found user with id: ${id}`})
            else
                res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: `Nothing retrieving with id ${id}`})
        })
    }
    else{
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
    }

// update user identified by his id
exports.update = (req, res) => {
    if (!req.body){
        return res.status(200)
        .send({message: "Data to Update can not be empty!"})
    }

    let id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndUpdate: false})
    .then(data => {
        if (!data){
            res.status(404).send({message: `Cannot upsdate user with id:${id} ! Maybe user not found.`})
        }
        else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error Update user informations"})
    })
}

// delet specified user by his
exports.delete = (req, res) => {
    let id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if (!data){
            res.status(400).send({message: `Cannot delete with id:${id}. Maybe its wrong.`})  
        }
        else{
            res.send({message: "User was deleted succesfully!"})
        }
    })
    .catch(err => {
        res.status(500).send({message: `could not delete User with id: ${id}`})
    })
}