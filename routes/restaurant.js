const express = require('express');
const { UploadRestaurant, getRestaurants, getSingleRestaurant, UpdateRestaurant, deleteRestaurant } = require('../controllers/restaurants');
const routes = express.Router();

routes.post('/restaurant/add', UploadRestaurant);
routes.get('/restaurants/list', getRestaurants);
routes.get('/restaurant/:restaurantId', getSingleRestaurant)
routes.put('/restaurant/update/:restaurantId', UpdateRestaurant)
routes.delete('/restaurant/delete/:username/:password/:restaurantId', deleteRestaurant)


module.exports = routes;