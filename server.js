var express = require('express');

// Create our app
var app = express();

// Webpack dumps the bundle.js in the 'public' directory
// The index.html file there imports the bundle.js
// Express automatically looks for and serves an index.html on startup
app.use(express.static('public'));

app.listen(3000, function() {
	console.log('Express server is running on port 3000!');
});

