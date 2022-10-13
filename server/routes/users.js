const router = require('express').Router({ mergeParams: true });

const {
    registerUser,
    loginUser
    
} = require('../controllers/usersController');

router.route('/').post(registerUser);
router.route('/login').post(loginUser);

 

module.exports = router;