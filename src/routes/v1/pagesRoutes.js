const express = require('express');
const pagesController = require('../../controllers/pagesControllers');

const router = express.Router();

// GET / - home page
router.get('/', pagesController.pagesIndex);
router.get('/about', pagesController.pagesAbout);

module.exports = router;