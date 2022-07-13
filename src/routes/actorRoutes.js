const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/movies/detail/:id/actors', actorController.listFromMovie);

module.exports = router;