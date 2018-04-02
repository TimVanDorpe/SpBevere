var mongoose = require('mongoose');
//crypto (hash and salt)
var crypto = require('crypto');
//JOT --> generate a JSOn webtoken for pw
var jwt = require('jsonwebtoken');
//his module exposes a sign method that we can use to create a JWT, 
//simply passing it the data we want to include in the token, plus a secret that the hashing algorithm will use. 
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
  
});
//To save the reference to the password, we can create a new method called setPassword on the userSchema schema that accepts a password parameter. 
//The method will then use crypto.randomBytes to set the salt, and crypto.pbkdf2Sync to set the hash
//We’ll use this method when creating a user. Instead of saving the password to a password path,
// we’ll be able to pass it to the setPassword function to set the salt and hash paths in the user document.
userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};
/*Checking the password is a similar process, but we already have the salt from the Mongoose model. 
This time we just want to encrypt the salt and the password and see if the output matches the stored hash.
Add another new method to the users.js model file, called validPassword*/ 
userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};
//Adding a generateJwt method to userSchema in order to return a JWT.
userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};
module.exports = mongoose.model('User', userSchema);
