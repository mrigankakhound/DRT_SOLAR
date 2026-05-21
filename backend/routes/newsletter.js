const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { subscribe, getSubscribers } = require('../controllers/newsletterController');

const newsletterValidation = [
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
];

router.post('/', newsletterValidation, subscribe);
router.get('/subscribers', getSubscribers);

module.exports = router;
