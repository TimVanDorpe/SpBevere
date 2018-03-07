var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
  id: String,
  naam: String,
  goals: String,
  assists: String,
  ingeschreven_jaar: String,
  bijnaam: String,
  actief_tot: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Player', PlayerSchema);