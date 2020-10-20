# Boilerplate for Express, .Env, Eslint (airbnb) MVC app

This is a boilerplate for simple express apps that do not need to connect with any database using the MVC architecture.

## Build/start App

- Development: npm start
- Production: npm run production

## App information

- Entry Point: server.js
- Express config: app.js

## Philosophy of folder structure

This project tries to follow mvc architecture with the SOLID principles. Meaning each file should have only once function and one should not have to edit other files to implement a new feature.

### Routes

To add a new route simply follow the structure from routes/example.js and it will be auto added to the app using app.use(baseRouterURL, router); inside the app.js file.

### Controllers

Controllers are stored in directories inside the controllers folder. Please see controllers/example for how to properly organize your controllers. each function should be stored in a module and all modules will be imported by index.js using requireModulesR(\_\_dirname);

## Dependencies - Their uses

### Dev

#### ESlint, extensions && prettier

Used for linting code based on Airbnb pattern with prettier.
Eslint config:

- Nno unused vars ignore req,res,val from express
- console warn

### Dependencies

#### nodeJS

#### nodemon

Used for automatically restarting server when files changes occur. nodemon.json config start: "clear" clears the console on start removing general logs made by nodemon.

#### Express

NodeJS framework of choice see config at app.js

#### DotEnv

This is used for accessing Environment variables stored at config.env. They can be accessed using process.env.VARIABLE.

#### Morgan

This is only loaded while in development mode. This is used log requests on node console for development.

#### requireModulesR

Custom function to load multiple modules at once. IMPORTANT: function returns an object with the fileNames (excluding '.js') as properties and their exports as values.

Used for Open/Close principle for routes (just add new routers in routes and the router will be imported automatically to our app.js). It is also used to import all controller modules into controllers/controller/index.js.

Generally it is a quality of life improvement.

HOW TO USE: requireModulesR(directory, typeOfRead (optional), currentFile (optional))

- directory: the directory from which it should start the file import
- typeOfRead (default: directory): Default will read all other .js files in this directory and import them. If you pass anything else (should be 'subdirectory') it will load all index.js files from all directory in current directory (specified by directory parameter).
- currentFile (default: index.js): this is used to exclude the current file from the automatic imports.
