var express = require('express');
const { getData } = require('../helpers/api');
var router = express.Router();

/* GET input listing. */
router.get('/input/:text', getData);

module.exports = router;
