 const express = require('express');
 const router = express.Router();
 const playerController = require('../controllers/playerController');

 router.get('/:id', playerController.getPlayerById);
 router.post('/score', playerController.submitScore);

 module.exports = router;