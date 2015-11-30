var Contact = require('../models/contacts.js');

module.exports = function(req,res){
  Contact.find(function(err, contacts){
    if(err){
      res.status(500).json({error:err});
    }else if(contacts === null){
      res.status(404).json({error:"No contacts was found !"});
    }else{
      res.json(contacts);
    }
  });
}
