const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');
const ClientController = require('./controllers/ClientController');
const CompanyController = require('./controllers/CompanyController');

// Middleware
router.use(function (req, res, next) {
  next();
});

// User Routes
router.get('/users', UserController.index);
router.post('/user', UserController.create);
router.get('/user', UserController.show);

// Client Routes
router.get('/clients', ClientController.index);
router.post('/client', ClientController.create);
router.get('/client', ClientController.show);

// Company Routes
router.get('/companies', CompanyController.index);
router.post('/company', CompanyController.create);
router.get('/company', CompanyController.show);

module.exports = router;
