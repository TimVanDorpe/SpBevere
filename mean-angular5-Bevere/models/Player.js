var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
  id: String,
  naam: String,
  goals: Number,
  assists: String,
  rating : Number,
  countRatings : Number,
  ingeschreven_jaar: String,
  bijnaam: String,
  actief_tot: { type: Date, default: Date.now },
});
/*PlayerSchema.methods.constructor() = function()
{  
    if(this.rating > 0)
    {this.countRatings = 1;}
    else{
      this.countRatings = 0;
    }
    
}*/
/*PlayerSchema.methods.setCountRatings = function(count){
  this.countRatings ++;

}
PlayerSchema.methods.setRating = function(rating){
  this.rating = (this.rating + rating)/this.countRatings

}
PlayerSchema.methods.Constructor = function(){
  if(this.rating > 0)
    {this.countRatings = 1;}
    else{
      this.countRatings = 0;
    }
}*/

module.exports = mongoose.model('Player', PlayerSchema);