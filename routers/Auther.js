const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/Auther-controller');

router.get('/authlist',AuthController.getAutherDetail)

router.post('/addauth',AuthController.addAutherDetail)

router.put('/updateauth/:cid',AuthController.updateAutherDetail)

router.delete('/deleteauth/:cid',AuthController.deleteAutherDetail)

module.exports = router;