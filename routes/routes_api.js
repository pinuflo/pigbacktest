const express = require('express');
const router = express.Router();
const playerController = require('../controllers/PlayerController');

router.get('/', (req, res) => {
    res.send('Bienvenidos a la API');
});

router.post('/player', (req, res) => {
    playerController.post(req, res);
});

router.get('/player', (req, res) => {
    playerController.get(req, res);
});

router.put('/player', (req, res) => {
    playerController.put(req, res);
});

module.exports = router;    