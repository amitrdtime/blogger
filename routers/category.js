const express = require('express')
const router = express.Router()
const catController = require('../controllers/category-controller');

router.get('/catlist',catController.getAllCatList)

router.post('/addcat',catController.addCategory)

router.put('/updatecat/:cid', catController.updatecat)

router.delete('/deletecat/:cid', catController.deletecat)

module.exports = router;