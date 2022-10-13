const router = require('express').Router({ mergeParams: true });
const users = require('./users');


router.use('/users', users);



router.get('/', (req, res) => {
    res.send('Server API V1!');
});

module.exports = router;