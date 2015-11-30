var Contact = require('../models/contacts.js');

module.exports = function(req, res){
  var id = req.params.id;
  Contact.findOneAndUpdate({_id : id}, req.body, function(err, contact){
    if (err) {
      res.status(500).json({error:err});
    }else{
      res.json(contact);
    }
  });
}
