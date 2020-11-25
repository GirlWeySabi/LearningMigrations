var express = require('express');
var router = express.Router();

const controller = require('../controllers/task.controller')
router.get('/', controller.retrieve);

router.get('/:id', controller.findOne);
  
router.post('/:userId', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);



module.exports = router;