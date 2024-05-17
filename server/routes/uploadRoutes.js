const express = require('express');
const router = express.Router();

const uploadController = require('../controllers/uploadController');

router.route('/upload').post(uploadController.handleUpload, uploadController.upload);

module.exports = router;
