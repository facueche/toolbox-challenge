const express = require('express');
const FetchFilesController = require('../core/infrastructure/controllers/fetchFiles.controller');

const router = express.Router();

router.get('/files/data', new FetchFilesController().handle);

module.exports = router;