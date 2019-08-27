##########################################
Install Mongo on MAC

brew.sh - homebrew is a package manager for MAC, similar to npm

brew install mongodb

create a directory for mongo to store its data (by default):
sudo mkdir -p /data/db

check it has the right permissions
sudo chown -R `id -un`/data/db
--> this did not work, but:
sudo chmod -R go+w /data/db = accessible to everyone
sudo chown -R \$USER /data/db = accessible just to the user (on mac)

now run a mongo daeman, a service that runs in the background and
listens for connections on a given port:

- mongod (mongo daeman)
  notice this is listening at: port=27017

- go to mongodb.com/ mongodb+Glossopnums+finale
  download the client to connect to mongo db
  --> download
  --> compass
  --> platform OS X

  click on Compass and connect
  note that by default there are 2 databases for mongo internal use (admin, local)

??????????? WINDOWS INSTALLATION [start]
To install on Windows: Note we need mongodb AND compass (client)

- go to mongodb.com
- community server tab
- Windows
- Download
- save and run
- complete ionstallation
- check install mongodb compass
  if this fails, uncheck, and then download compass separately
  --> mongodb website / Compass / Windows / download
  Go to:
  Program Files/MongoDB/[version number] / bin / mongod
  --> add path to mongod (omit mongod) to system env var
  --> run from command line: (may need to restart cmd terminal first)
  mongod

  make the directory for the data:
  md C:\data\db

run mongod again.......and see on port 27017 (verifies that mnongodb server is running)

now open up compass and connect as for MAC

??????????? WINDOWS INSTALLATION [end]

---

Add the Mosh node backend to the Vidly project:
https://github.com/mosh-hamedani/vidly-api-node

- clone this above project folder (ie MOSH)
- install the dependencies
  npm i
  !!!!! installs the whole library!!!!

- supply some sample data for the database:
  node seed.js

##########################################

## react-vidly-extras-reusable-forms

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
