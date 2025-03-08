let express = require('express');
let router = express.Router();
let userController = require('../controllers/user-controller')

// http://localhost:5000/user/login
router.post('/login',userController.userLogin);
router.get('/adduser',userController.adduser);
router.get('/getuser',userController.getUserDetail);


module.exports= router;
