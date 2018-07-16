const userContoller = require('./userController.js');

const router = require('koa-router')(); // is a function!

router.post('/login', userContoller.userLogin);

module.exports = router;