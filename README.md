# Let's learn React.js!

## Table of contents
* [Setting up a new React app](#setup)
* [Learning goals](#goals)
* [Navigating the file structure](#file-structure)
  * [Cleaning up the default files](#clean-up)
  * [Important files to pay attention to](#important-files)
* [Deliverables](#deliverables)
* [Resources](#resources)

<a name="setup"/>

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

Install [React Developer Tools](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation) in Google Chrome. It will help you view React component hierarchies in the browser.

<a name="goals"/>

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

<a name="file-structure"/>

## Navigating the file structure

<a name="clean-up"/>

### Cleaning up the default files
You can go ahead and delete the following files, as we won't be using them. These are just files that get automatically created when you start a new React app, but aren't necessary. 

```
src/App.test.js
src/logo.svg
src/serviceWorker.js
src/setupTests.js

public/logo192.png
public/logo512.png
```

Your console's going to be throwing a lot of errors at you now, so let's update some code.

Copy and paste this code into `src/index.js`:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

Copy and paste this code into `public/index.html`:

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Copy and paste this code into `public/manifest.json`:

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

Copy and paste this code into `src/App.css`:

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}
```

Copy and paste this code into `src/App.js`:

```javascript
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
```

<a name="important-files"/>

### Important files to pay attention to

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

<a name="deliverables"/>

## Deliverables

<a name="resources"/>

## Resources
* https://reactjs.org/docs/events.html