const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

//🔑 When we run the application and visit the http://localhost:3000/ page, we are presented with a definition for an API.
//We can send entire files that contain HTML using res.sendFile().
//We can send a body parameter to the client using the res.send() method.
//This body parameter can be a string, buffer, or even an array. In the root path, /, for example, we send a string that contains a p element that gets rendered in the browser:
app.get('/', function(req, res) {
  res.send(`<iframe src="https://redocly.github.io/redoc/?nocors&url=https://raw.githubusercontent.com/elliotpark410/practice-redoc-test/main/output.yaml"
  frameborder="0" 
  marginheight="0" 
  marginwidth="0" 
  width="100%" 
  height="100%" 
  scrolling="auto">
</iframe>`);
});



app.listen(PORT, () =>
  console.log(`Redoc docs are at http://localhost:${PORT}`)
);
