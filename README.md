# Sample MEAN Contact List
A Sample [MongoDB](https://www.mongodb.org/), [Express](http://expressjs.com), [Angular JS](https://angularjs.org), [Node JS](http://nodejs.org/) Contact List App


##Configuration

###Database
Go to __server/config/config.js__ and edit mongodb __url__ to your own mongodb URI
[mongodb://username:password@host:port/dbname](https://docs.mongodb.org/manual/reference/connection-string/)

```javascript
module.exports = {
  url : 'YOUR_DB_URL_HERE'
}
```

###Dependencies
Open a terminal in __server__ folder and then
```
npm install
```

###Required dependencies :
* body-parser: "^1.14.1"
* express: "^4.13.3"
* mongoose: "^4.2.8"

##Run
After modules install is completed, start the app using [node](http://nodejs.org/)
```
node server
```
__or__ using [nodemon](https://github.com/remy/nodemon)
```
nodemon server
```
That's it go to [http://localhost:3000/](http://localhost:3000/)
