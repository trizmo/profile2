const express = require("express");
const router = express.Router();

// CONTROLLER
const mailer_controller = require('../../controllers/mailer_controller')

// POST ROUTE /api/mail/
// SEND EMAIL TO TRISTAN
// Access: PUBLIC
router.post('/', mailer_controller.sendMail)


module.exports = router;