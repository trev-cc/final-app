var express = require('express');
var router = express.Router();
var ctrlMemberApi = require('../controllers/memberapi');
var ctrlLocationApi = require('../controllers/locationapi');

router.get('/members', ctrlMemberApi.getMemberData);

router.get('/location', ctrlLocationApi.getLocationData);

module.exports = router;
