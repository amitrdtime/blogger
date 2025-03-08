let express = require('express');
let router = express.Router();
let userController = require('../controllers/users-controller')

// http://localhost:5000/user/login
router.post('/login',userController.userLogin);
router.post('/adduser',userController.addUserDetail);
router.get('/getuser',userController.getUserDetail);


module.exports= router;
