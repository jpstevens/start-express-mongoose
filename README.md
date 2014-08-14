# Start Express Mongoose

A Mongoose boot helper for Express.js

## Example Usage:

```javascript
var express = require('express');
var app = express();

// method #1
app.set('mongodb', 'mongodb://user:pass@server.mongohq.com/db_name');
// method #2
app.set('mongoose', 'mongodb://user:pass@server.mongohq.com/db_name');
// method #3
process.env.MONGODB_URL = 'mongodb://user:pass@server.mongohq.com/db_name';

// start HTTP server
require('start-express-mongoose').start(app).then(function(){
  // do something here...
});
```
