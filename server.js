const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const Items = require('./Models/Items');
const Categories = require('./Models/Categories');
const Users = require('./Models/Users');
// Create a new Express application (web server)
const app = express();

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

app.use('/static', express.static('build/static'));


//Items server calls
app.get('/items.json', (request, response) => {
  Items.all().then(itemsData => {
    response.json(itemsData)
  });
});

app.get('/items/:id.json', (request, response) => {
  Items.find(request.params.id)
    .then(data => {
      response.json(data);
    });
});

//Categories server calls
app.get('/categories.json', (request, response) => {
  Categories.all().then(categoriesData => {
    response.json(categoriesData);
  });
});

app.get('/categories/:id.json', (request, response) => {
  Categories.find(request.params.id)
    .then(data => {
      response.json(data);
    });
});

//User server calls

app.get('/users/:id.json', (request, response) => {
  Users.find(request.params.id)
    .then(data => {
      response.json(data);
    });
});


// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.get("/*", function (request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Start the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
