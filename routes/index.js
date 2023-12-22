var express = require('express');
var router = express.Router();
const urldata = require('../controller/urlController')
/* GET home page. */
router.post('/', urldata.createid);
router.get('/:cutedURL', urldata.findid);
router.get('/statistics/:cutedURL', urldata.statistics);

module.exports = router;
