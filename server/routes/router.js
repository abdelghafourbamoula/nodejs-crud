const express = require('express')
const route = express.Router()

const servises = require('../services/render')

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

module.exports = route