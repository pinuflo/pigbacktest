var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Player = require('../models/Player');


// CREATES A PLAYER IN THE DATABASE
router.post('/', function (req, res) {
    Player.findOne({ name: req.body.name },  
        (err, user)=> 
        {
            if(err)
            {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");
            }
            if (user)
            {
                res.status(200).send({ success: false, msg: "player " + req.body.name + " already exists" })
            }
            else
            {
                Player.create({
                    name : req.body.name,
                    wins : 0,
                }, 
                function (err, player) {
                    if (err) return res.status(500).send("There was a problem adding the information to the database.");
                    res.status(200).send({ success: true, data: player });
                });
            }

    })
});

// RETURNS ALL THE PLAYERS IN THE DATABASE
router.get('/', function (req, res) {
    Player.find({}).limit(5).exec( function (err, players) {
        if (err) return res.status(500).send("There was a problem finding the players.");
        res.status(200).send({ success: true, data: players });
    });
});

// UPDATES A SINGLE PLAYER WINS IN THE DATABASE ATOMICALLY
router.put('/', function (req, res) {

    
    Player.findOne({ name: req.body.name }, function(err, player) {
        if (err) return res.status(500).send("There was a problem updating the player");
        if(!player)  return res.status(500).send("PLAYER DOENST EXIST");
        player.update({$inc: {wins: 1}}, (err,result)=>
        {
            if(err) if (err) return res.status(500).send("There was a problem updating the player");
            res.status(200).send({ success: true, data: player });
        });
    });  

    
});


module.exports = router;