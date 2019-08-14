var mongoose = require('mongoose');  
var PlayerSchema = new mongoose.Schema({  
  name: String,
  wins: Number,
});
mongoose.model('Player', PlayerSchema);

module.exports = mongoose.model('Player');