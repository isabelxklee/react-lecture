# Let's learn React.js!

## Table of contents
* [Getting started](#getting-started)
* [Learning goals](#goals)
* [Navigating the file structure](#file-structure)
* [Deliverables](#deliverables)
* [How to create a new React app](#new-app)
* [Resources](#resources)

<a name="getting-started"/>

## Getting started
Fork this repo. Copy the new repo URL and run `git clone` in your terminal. `cd` into the new directory and run these commands.

```
npm install
npm install -g json-server
json-server --watch db.json
```

This will start the JSON server in `localhost:3000`. Navigate to `localhost:3000/team-members` in the browser to see all our data.

Now, open up a new terminal and run the following command:

```
npm start
```

The terminal will ask you to start a new server since we already have the JSON server running on `localhost:3000`. Enter `y` to start a new server on `localhost:3001`.

Open `http://localhost:3001` in the browser to see your app.

* OPTIONAL: Make a copy of `db.json` and save it as `original_db.json`. This is so that you can always refer back to the original database in case you mess up the database with incorrect PATCH requests.

<a name="goals"/>

## Learning goals
#### Components
* Functional components vs. class components
* When should you use each component?
* Do you need access to `this` keyword? -> Class component
* Are you going to be manipulating the state? -> Class component
* Are you writing minimal logic that doesn't change the state? -> Functional component
* Are you using the component as a container to render other child components? -> Functional component

#### State management
* Updating local state through `setState()`
* `setState()` re-renders the component
* What about global state? -> Redux

#### Lifecycle methods
* componentDidMount()
  * Initializes data from an endpoint
  * Can only be called once in a component, but can contain multiple fetch requests

* render()
  * Required in a class component
  * Shouldn't contain any logic that will manipulate the state

* Asynchronous rendering

#### Inverse data flow
* Parent <> child relationships
* Function definition -> down, invocation -> up
* Siblings can't talk to each other
* How and when to use props
* Child components in a list *always* need a key prop

#### Event handlers
* There are different kinds of event handlers available to us, depending on the HTML element that we're interacting with
* Here are some of the most common event handlers that we'll be using:
  * onClick (buttons), onSubmit (forms), onChange (input fields)

#### Syntax quirks
* JSX fragments
* Functions must have an explicit return value
* if/else conditional statements vs. ternary operators
* React loooooves arrow functions
* Destructuring props for DRYer code

<a name="file-structure"/>

## Navigating the file structure
Here's a breakdown of some of the important files in your React app:

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
In this example project, we're going to be creating a team directory for SuperHi! For each SuperHi team member, we're going to display their profile picture, name, role, location, and the number of stars they have.

#### 1. Change the data in `App.js`.
* Create an `<h1>` tag. Put "SuperHi Team Directory" in between the `<h1>` tags.
* Create a `<p>` tag. Put "Here are all the wonderful members of SuperHi!" in between the `<p>` tags.

#### 2. Create a functional component called `TeamContainer.jsx` inside the `src` directory.
* Create a functional component that renders all the SuperHi team members as a `<TeamMember>` component.

#### 3. Create a class component called `TeamMember.jsx` inside the `src` directory.
* Each team member card should display their personal information and have a "Give a star" button and "Remove" button.

#### 4. Write a fetch GET request in `App.js` to pull in our data.
* Use `componentDidMount()`.
* Update the local state with our new array of team members after completing the fetch request. 

#### 5. Create a class component called `NewMemberForm.jsx`.
* Create an HTML form that lets you add a new team member.
* There should be input fields for: name, role, picture, and location.
* No need to create an input field for stars because everyone starts with 0!

#### 6. Create event handlers for the form.
* Add `onChange` event handlers for each input field that updates the local state.
* Add an `onSubmit` event handler for the form itself.
* Create helper methods that get invoked each time the event handler is triggered.

#### 7. Write a fetch POST request for adding a new team member.
* This fetch request should be inside the helper method for  `onSubmit`.

#### 8. Create event handlers for the "Edit" and "Delete" buttons for each team member.

#### 9. Write a fetch PATCH request for updating a team member's information.

#### 10. Write a fetch DELETE request for deleting a team member.

<a name="new-app"/>

## How to create a new React app
Now, if you want to try creating your own React app from scratch, here are the steps:

In your terminal, run the following command. Replace `my-app-name` with the name of your app.

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

### Cleaning up the default files
These are some of the files that come with a default React app, but they're not necessary. You can go ahead and delete them.

```
src/App.test.js
src/logo.svg
src/serviceWorker.js
src/setupTests.js

public/logo192.png
public/logo512.png
```

After you do this, your console's going to be throwing a lot of errors at you, so make sure to go through your code and remove references to these deleted files.

<a name="resources"/>

## Resources
React events: https://reactjs.org/docs/events.html

JSON View: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en
* OPTIONAL: Install JSON View as a Google Chrome Extension to help you view JSON documents.

React Developer Tools: https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation
* OPTIONAL: Install React Developer Tools as a Google Chrome Extension to help you view React component hierarchies in the browser.