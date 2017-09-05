const express = require('express');
const app = express();


// this tells the server to serve up your public directory at the root url ex. www.google.com/ it defaults to looking for an index.html as its entry point
app.use(express.static('public'));

// declaring port as either the environment variable provided once deployed or 3000 for local hosting
const port = process.env.PORT || 3000;

// this sets the port the app is listening for traffic on
app.listen(port, () => {
  console.log('Listening on port', port);
});
