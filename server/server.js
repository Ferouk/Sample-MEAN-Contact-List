var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var dbConfig = require('./config/database');

var app = express();

/* Mongoose init and schema load */
mongoose.connect(dbConfig.url);

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../client'));

/* routers */
var router = express.Router();

router.route('/contacts')
.get(require('./controllers/contactsGet'))
.post(require('./controllers/contactsPost'));

router.route('/contact/:id')
.get(require('./controllers/contactGet'))
.delete(require('./controllers/contactDelete'))
.put(require('./controllers/contactPut'));

app.use(router);

/* App Configs */
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Stuff & Things are coocked here --> http://localhost:'+port+'/');
