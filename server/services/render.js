const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // make get request to api/users 
    axios.get('http://localhost:3000/api/users')
    .then((response) => {
        res.render('index', {users: response.data})
    })
}

exports.add_ser = (req,res) => {
    res.render('add_user')
}

exports.update_user = (req,res) => {
    axios.get('http://localhost:3000/api/users', {params: {id: req.query.id}})
    .then((userdata)=>{
        res.render('update_user',{user: userdata.data})
    })
    .catch(err => {
        res.send(err)
    })
}