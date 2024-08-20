const express = require('express');
const router = express.Router();
const {ajout_customers, details_customers, get_list_customers} = require('../controllers/customersControllers.js');

//route pour ajouter un client
router.post('/add_customers', ajout_customers);

//Route pour afficher un client par son telephone
router.get('/details_customers/:phone_number', details_customers);

//Route pour afficher la liste des clients
router.get('/get_list', get_list_customers);

module.exports = router;