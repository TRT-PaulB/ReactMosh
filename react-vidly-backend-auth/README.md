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

GET GENRE:
http://localhost:3900/api/genres

# =========================================================

AUTHENTICATION

- JSON web tockens
- calling protected APIS
- SHOWING / HIDING ELEMENTS
- protecting routes

http://localhost:3900/api/users
{
"email": "dddd@st.com",
"password": "qqqwe",
"name": "nameXYZ"
}

- register a new user

- logging in as a user requires webtoken
  http://localhost:3900/api/auth
  supply an existing email and password with this POST request
  see vidly-api-node/routes/auth.js

  client supplies valid user and pass to server, then if authentication
  is configured, the server sends the JSON WEB TOKEN back to the browser
  --> and then the client sends this authenticaion back to the server
  --> server validates this
  --> server then executes the client's request
  test@tyest.com
  user@user.com
  usuuer@user.com
  password

- Store JSON webtocken on client and redirect onto homepage
  store key value pairs in browser database: every browser has a db called 'local storage'
  CHROME / Application / Local Storage
  a token is stored for each 'domain'

  login.doSubmit()

  - create a new user in postman
  - x-auth-token (with x- it is a custom header beyond normal http protocol)
    but equallly this could go in the header
    --> read header
    --> extract toekn
    --> store in local storage
    --> redirect user

LOOK IN vidly-api-node/routes/users.js
--> after these changes, when registering a new user, note that
registerForm.doSubmit(). response object, when written to the console, includes the x-auth-token

In application tab of chrome, delete from local storage to test:

- register a new user
- look in movies page, and see that the user is automatically logged in
  (because on the movies page a token exists on local storage)

# =========================================================

##

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
