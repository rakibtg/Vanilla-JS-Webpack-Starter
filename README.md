# Vanilla JavaScript Webpack Starter

This is a very simple easy to understand implementation of webpack to use javascript for DOM manipulation but besides that you get to use the bundler of webpack and a live reload dev server.

# Getting started

Prepare the project,

- Clone this repository.
- `cd` into the directory where you have cloned this repository.
- Run `npm install`

# Entry Point
```
/src/app.js
```

# How to start the dev server?
To start the dev server with auto reload feature run this command,
```
npm run server
```
Then go to `http://localhost:9300/`. Each time you make some changes in the JS files in the `/src/` directory the dev server will first make a dev build and the reload the page in your web browser.

# How to make a `production` build?
To make a production build run this command,
```
npm run build
```
This will replace the old bundle with a new one in the `/dist` directory.

### Create an issue if you have any question.