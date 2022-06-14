const express = require('express')
const route = express.Router()

const servises = require('../services/render')
const controller = require('../controller/controller')

/**
 * @description Home Roote
 * @method GET /
 */
route.get('/', servises.homeRoutes)

/**
 * @description add user
 * @method GET /add-user
 */
route.get('/add-user', servises.add_ser)

/**
 * @description update-user
 * @method GET /update-user
 */
route.get('/update-user', servises.update_user)

// API 
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.post('/api/users/:id', controller.update)
route.post('/api/users/:id', controller.delete)


module.exports = route