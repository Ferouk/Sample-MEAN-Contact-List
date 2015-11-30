var Contact = require('../models/contacts.js');

module.exports = function(req, res){
  var contact = new Contact(req.body);
  contact.save(function(err, contact){
    if (err) {
      res.status(500).json({error:err});
    }else{
      res.json(contact);
    }
  });
}
