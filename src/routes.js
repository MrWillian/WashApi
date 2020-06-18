const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');
const ClientController = require('./controllers/ClientController');
const CompanyController = require('./controllers/CompanyController');
const AddressController = require('./controllers/AddressController');
const PaymentController = require('./controllers/PaymentController');
const AuthController = require('./controllers/auth/AuthController');

// Middleware
router.use(function (req, res, next) {
  next();
});

// User Routes
router.get('/users', UserController.index);
router.post('/user', UserController.create);
router.get('/user', UserController.show);
router.delete('/user', UserController.delete);

// Client Routes
router.get('/clients', ClientController.index);
router.post('/client', ClientController.create);
router.get('/client', ClientController.show);

// Company Routes
router.get('/companies', CompanyController.index);
router.post('/company', CompanyController.create);
router.get('/company', CompanyController.show);

// Address Routes
router.get('/addresses', AddressController.index);
router.post('/address', AddressController.create);
router.get('/address', AddressController.show);
router.delete('/address', AddressController.delete);

// Payment Routes
router.get('/payments', PaymentController.index);
router.post('/payment', PaymentController.create);
router.get('/payment', PaymentController.show);
router.delete('/payment', PaymentController.delete);

// Auth Routes
router.post('/login', AuthController.login);

module.exports = router;
