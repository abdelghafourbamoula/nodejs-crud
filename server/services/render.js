const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // make get rrequest to api/users 
    axios.get('http://localhost:3000/api/users')
    .then((response) => {
        console.log(response)
        res.render('index', {users: response.data})
    })
}

exports.add_ser = (req,res) => {
    res.render('add_user')
}

exports.update_user = (req,res) => {
    res.render('update_user')
}