var Contact = require('../models/contacts.js');

module.exports = function(req, res){
  var id = req.params.id;
  Contact.findOne({_id: id}, function(err, contact){
    if(err){
      res.status(500).json({error: err});
    }else if(contact === null){
      res.status(404).json({error: "The requested contact wasn't found !"});
    }else{
      res.json(contact);
    }
  });
}
