const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const Items = require('./models/Item');
const Categories = require('./models/Category');
const User = require('./models/User');
const session = require('express-session');
const bodyParser = require('body-parser');

// Create a new Express application (web server)
const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.json());

app.post("/register", (request, response) => {
  const password = request.body.password;
  const saltRounds = 12;
  bcrypt.hash(password, saltRounds)
    .then(hash => {
      const newUser = {
        username: request.body.username,
        password_digest: hash,
        phone_number: request.body.phone_number,
        email: request.body.email,
        location: request.body.location,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        latitude: request.body.latitude,
        longitude: request.body.longitude
      };

      return User.create(newUser);
    })
    .then(user => {
      request.session.loggedIn = true;
      request.session.userId = user.id;
      response.json({ user });
    });
});

app.post("/login", (request, response) => {
  User.findByUsername(request.body.username).then(user => {
    return bcrypt
      .compare(request.body.password, user.password_digest)
      .then(isPasswordCorrect => {
        if (isPasswordCorrect) {
          request.session.loggedIn = true;
          request.session.userId = user.id;
          return response.json({
            loggedIn: true,
            user: { user }
          })
        } else {
          response.json({
            loggedIn: false,
            user: null,
          })
        }
      });
  });
});

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
    .then(item => {
      Categories.find(item.category_id).then(category => {
        User.find(item.user_name_id).then(user => {
        const dataForTemplate = {};
        dataForTemplate['item'] = item;
        dataForTemplate['category'] = category;
        dataForTemplate['user'] = user;
        response.json(dataForTemplate);
        });
      });
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
