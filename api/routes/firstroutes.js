const express = require('express')
const router = express.Router()
//const FirstModel = require('../models/firstmodel')
const firstController = require('../Controller/firstcontroller')

//Get
router.get('/', firstController.getController );


router.post('/', firstController.postController);

module.exports = router;