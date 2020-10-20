# Let's learn React.js!

## Setting up a new React app
In your terminal, run the following command to create a new React app. Replace `my-app-name` with the name of your app.

```
$ npx create-react-app my-app-name
```

Navigate to the new directory.

```
$ cd my-app-name
```

Start the server and navigate to `localhost:3000` in your browser.

```
$ npm start
```

## Learning goals
* State management
  * Updating the local state through `this.setState()`
  * What about global state? -> Redux

* Components
  * Functional components vs. class components
  * When should you use each component?
  * Do you need access to `this` keyword? -> Class component
  * Are you going to be manipulating the state? -> Class component
  * Are you writing minimal logic that doesn't change the state? -> Functional component
  * Are you using the component as a container to render other child components? -> Functional component

* Inverse data flow
  * Parent <> child relationships
  * How and when to use props
  * Child components in a list *always* need a key prop

* Event handlers
  * There are different kinds of event handlers available to us, depending on the HTML element that we're interacting with
  * Here are some of the most common event handlers that we'll be using:
  * onClick (buttons), onSubmit (forms), onChange (input fields)

* Syntax quirks
  * JSX fragments
  * Functions must have an explicit return value
  * if/else conditional statements vs. ternary operators
  * React loooooves arrow functions

## Navigating the file structure
You can go ahead and delete the following files, as we won't be using them:

```
src/App.text.js
src/logo.svg
src/serviceWorker.js
src/setupTests.js

public/logo192.png
public/logo512.png
```

`package.json`
  * Where all your dependencies live
  * If you edit this file, make sure to run `npm install` after!

`pacakge-lock.json`
  * Automatically generated file that changes any time your dependencies are updated

`.gitignore`
  * File that gets ignored when you push changes to GitHub
  * Handy for storing API keys and any other sensitive information

`src/App.css`

`src/App.js`

`src/index.css`

`src/index.js`

`public/manifest.json`

`public/index.html`

## Deliverables

## Sources
* https://reactjs.org/docs/events.html
