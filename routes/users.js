var express = require('express');
var router = express.Router();

/* GET users listing. */

const controller = require('../controllers/user.controller');


router.get('/', controller.retrieve);

router.get('/:id', controller.findOne);

router.post('/', controller.create); 

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
