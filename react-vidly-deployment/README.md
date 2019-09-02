# =========================================================

START UP VIDLY NODEJS BACKEND SERVER

- run mongod daeman in the background
- make mongodb client compass connection
- start server in vidly-api-node: node index.js
- http://localhost:3900/api/genres etc
- postman
- run front end app: npm start

# =========================================================

Deployment Chapter:

Environment variables
--> note .env files and index.js
--> note this comes out in console, cannot be found in Sources

Production Builds
--> npm run build (this is the production enviroment) + npm start is the dev environment + npm test
--> note that production environment vars are in .env
--> this produces an optimized producion build
--> content is created in a new build folder

Look in terminal for these commands:
--> npm install -g serve [a simple lightweigth webserver]
--> serve -s build [serve the content of the build folder]
--> test: http://localhost:5000

Deploying to Heroku
--> create heroku account: www.heroku.com + https://dashboard.heroku.com/apps
--> create heroku cli: download heroku for msc https://devcenter.heroku.com/articles/heroku-cli

heroku -v
heroku login (email and 'normal+Gloss+other')
if behind a proxy, do this:
--> export HTTP_PROXY=http://[proxy.server.com]:[some port number...1234]

Setup mLab account to setup mongodb database in the cloud
https://mlab.com has now been taken ovder by MongoDB Atlas
NoSQL databases are in a distributed environment (or cluster),
where the databases can be a lower spec.
End up having to pay for the hosting.

create a new cluster.....on a free sandbox

credentials:
home.paul47@gmail.com / MDB[A][glossop]+[other]

Create user as follows:
dbPaul = dbPaul[glossop]+[other]
configured --> 185.108.170.158 RR connection IP address
THEN:
--> click connect
--> copy connection string into new mongo in MongoDBCompass

Now set about deploying the Vidly application to Horuku:

Perfectly fine to version and deploy the backends separately.
ie vidly-api-node (backend) deployed separately from vidly project at the front end

Ignore everything in the node_modules folder when checking into git
.gitignore node_modules/

NOTE: should really ignore node_modules on all the apps in extmosh !!!!!

DEPLOY ON HEROKU:

- within the server directory (vidly-api-node):
  heroku create [could specify a uinque name, or just let Heroku speficy a name for us]
- name given = tranquil-taiga-93912
  backend hosted at this address:
  https://tranquil-taiga-93912.herokuapp.com/ | https://git.heroku.com/tranquil-taiga-93912.git

  So, frontend send requests to:
  https://tranquil-taiga-93912.herokuapp.com/

  Push our local git repository to:
  https://git.heroku.com/tranquil-taiga-93912.git

  When we push to this remote repository:
  --> Horuko will be notified
  --> Horuko will download the latest sourcde code
  --> build it
  --> deploy it to the address https://tranquil-taiga-93912.herokuapp.com/

  IE continuous integration...

  git push heroku master

  then, if this is successful:
  --> heroku open
  this launches the browser ointing to the applicaion on Heroku

Now go to Heroku dashboard:
https://dashboard.heroku.com/apps/ + tranquil-taiga-93912
--> gives us the server logs
--> alternatively, use the terminal (inside server directory):
type: heroku logs

NOW for it to work don't forget to configure the database in default.json:
From mongoDB Atlas,get db connection string:
mongodb+srv://dbPaul:[PASSWORD]@vidly-4g6rs.mongodb.net/test?retryWrites=true&w=majority

IN A PRD ENVIRONMENT ALWAYS USE ENVIRONMENT VARIABLES to avoid hard coding and hackers:
mongodb+srv://dbPaul:<password>@vidly-4g6rs.mongodb.net/test?retryWrites=true&w=majority

heroku config:set vidly_db=[connection string with substituted password]
mongodb+srv://dbPaul:<password>@vidly-4g6rs.mongodb.net/test?retryWrites=true&w=majority

heroku config:set vidly_db=mongodb+srv://dbPaul:dbPaul12345!@vidly-4g6rs.mongodb.net/test?retryWrites=true&w=majority

Note common folder conventions:
vidly-api-node
--> custom-environment-variables.json
--> default.json
--> test.json

note that we set env variable 'vidly_db' inside the terminal.
so append: "db": "vidly_db"
in custom-environment-variables.json

Deploy by staging and commiting all the changes.
Then: git push heroku master

NOTE DEPLOYMENT TROUBLESHOOTING:
https://devcenter.heroku.com/articles/troubleshooting-node-deploys

-----> Installing binaries
remote: engines.node (package.json): 8.4.0
remote: engines.npm (package.json): unspecified (use default)
remote:  
remote: Resolving node version 8.4.0...
remote: Downloading and installing node 8.4.0...
remote: Using default npm version: 5.3.0

node 8.4.0... LOCAL: v12.8.0
npm version: 5.3.0 LOCAL: 6.11.2

==> DEPLOYMENT PROBLEMS STATED AROUND Deployment ch7,
probably a result of these version differences...

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
