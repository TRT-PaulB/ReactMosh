# =========================================================

START UP VIDLY NODEJS BACKEND SERVER

- make mongodb client compass connection
- run mongod daeman in the background
- start server in vidly-api-node: node index.js
- http://localhost:3900/api/genres etc
- postman

--> note that default.json requiresAuth is switched to false (just for dev testing on the course)

POST A NEW MOVIE:
http://localhost:3900/api/movies
{
"title": "New Movie XYZ",
"numberInStock": "10",
"dailyRentalRate": "7",
"genreId": "5d65131c6885934621be3b6c"
}

# =========================================================

RESOURCE:
https://github.com/mosh-hamedani/vidly-api-node

Setup mosh backend node.js code:
npm i
node seed.js [populates the db]
npm test
node index.js -> http://localhost:3900/api/genres

update dependency to '\*'

sudo lsof -i :3900
kill -9 [pid]

npm install -g node-gyp
npm install --save bcrypt@3.0.2

MOSH FEEDBACK:
https://forum.codewithmosh.com/d/280-geeting-errors-in-vidly-api-node-backend/17

MAJOR ISSUE WAS TO FIX THE VERSION OF NODE.js to be used, see package.json.....
https://forum.codewithmosh.com/d/694-may-2019-summary-of-react-tutorial-vidly-node-deployment-fixes

lsof -i :3900
Kill -9 [pid]
"port": "3900",

## Introduction

This project is the backend of Vidly, an imaginary video rental app. I've used Vidly as an example in several of my online programming courses, such as:

- https://codewithmosh.com/p/mastering-react
- https://codewithmosh.com/p/the-complete-node-js-course
- https://codewithmosh.com/p/asp-net-mvc

This is the implementation of Vidly in Node.js. See package.jsn engines....

## Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

Once you install MongoDB, make sure it's running.

### Install the Dependencies

Next, from the project folder, install the dependencies:

    npm i

### Populate the Database

    node seed.js

### Run the Tests

You're almost done! Run the tests to make sure everything is working:

    npm test

All tests should pass.

### Start the Server

    node index.js

This will launch the Node server on port 3900. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:

http://localhost:3900/api/genres

You should see the list of genres. That confirms that you have set up everything successfully.

### (Optional) Environment Variables

If you look at config/default.json, you'll see a property called jwtPrivateKey. This key is used to encrypt JSON web tokens. So, for security reasons, it should not be checked into the source control. I've set a default value here to make it easier for you to get up and running with this project. For a production scenario, you should store this key as an environment variable.

On Mac:

    export vidly_jwtPrivateKey=yourSecureKey

On Windows:

    set vidly_jwtPrivateKey=yourSecureKey
