const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { submitContact, getEnquiries } = require('../controllers/contactController');

// Validation rules
const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }).withMessage('Name too long'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[+]?[\d\s\-()]{7,20}$/)
    .withMessage('Invalid phone number'),
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
  body('city').trim().notEmpty().withMessage('City is required'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ max: 2000 })
    .withMessage('Message too long (max 2000 chars)'),
];

router.post('/', contactValidation, submitContact);
router.get('/enquiries', getEnquiries);

module.exports = router;
