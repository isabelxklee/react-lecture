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

##### A note on our data source
* In this example project, our backend is simply going to be the JSON inside `db.json`, instead of an independent backend API.

##### Optional, but helpful
* Make a copy of `db.json` and save it as `original_db.json`. This is so that you can always refer back to the original database in case you mess up the database with incorrect PATCH requests.

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

`public/index.html`

First page that gets loaded when your application starts.

`public/manifest.json`

Holds meta data about your app.

`src/index.js`

JavaScript file that gets loaded from `index.html`. Renders `App.js` from here.

`src/index.css`

CSS rules for `index.js`.

`src/App.js`

The main component that renders all the other components.

`src/App.css`

CSS rules for `App.js`.

`package.json`

Where all your dependencies live. If you edit this file, make sure to run `npm install` after!

`pacakge-lock.json`

Automatically generated file that changes any time your dependencies are updated.

`.gitignore`

File that gets ignored when you push changes to GitHub. Handy for storing API keys and any other sensitive information.

<a name="deliverables"/>

## READ deliverables
In this example project, we're going to be creating a team directory for SuperHi! For each SuperHi team member, we're going to display their profile picture, name, role, location, and the number of stars they have.

#### 1. Change the data in `App.js`.
* Inside the `<h1>` tag, add "SuperHi Team Directory".
* Inside the `<p>` tags, add "Here are all the wonderful members of SuperHi!".

#### 2. Write a fetch GET request in `App.js` to pull in our data from the backend.
* Use `componentDidMount()`.
* Send the fetch request to `localhost:3000/team-members`.
* Update the local state with our new array of team members.

#### 3. Invoke the `TeamContainer` component inside `App.js`'s return statement.
* Send down props from `App.js`'s local state to the `TeamContainer` component, so that `<TeamMember>` can render all the SuperHi team members.

#### 4. In `TeamContainer.jsx`, iterate through the array of team members passed down from props and return a `TeamMember` component for each person.
* `TeamContainer` is a functional component, so it won't have access to `this` keyword.
* Make sure to pass in the keyword `props` as an argument in the function definition for `TeamContainer`.

#### 5. Display each team member's info in the `TeamMember` component.
* Each team member card should display their personal information and have a "Give a star" button and "Remove" button.
* Destructure the props in the `render()` method to have cleaner code in the return statement.

## CREATE deliverables

#### 1. Create event handlers in `NewMemberForm.jsx`.
* Write the following attributes for the local state: name, role, location, and picture.
* Create a helper method that gets invoked every time a user interacts with an input field.
* Add an `onChange` event handler for each input field. This should invoke the helper method written above.
* Create a helper method for when the form gets submitted. This helper method should include `event.preventDefault()` to stop the page from refreshing. It should also include a fetch POST request to `localhost:3000/team-members`.
* The stars attribute for new members can be set to 0 as a default.
* Add an `onSubmit` event handler to the form itself. This should invoke the helper method written above.

#### 2. Write a helper method in `App.js` that adds a new member to the local state.
* Since we've already sent the new member's data to the backend (AKA our `db.json` file), we need to update the object in memory and the DOM. Since React automatically re-renders the browser any time the state is changed, we just need to focus on changing the object in memory.
* Invoke `setState()` to update the local state.
* Make sure to use the spread operator when invoking the array of team members to avoid directly mutating the data.

#### 3. Send down our new helper method as props to `NewMemberForm.jsx`.
* Inside the form submit helper method in `NewMemberForm.jsx`, invoke this helper method. Pass in the new team member instance as an argument.

## UPDATE deliverables

#### 1. In `TeamMember.jsx`, create an event handler for the "Give a star" button.
* Create a helper method that gets invoked every time the user clicks on the `Give a star` button for a team member.
* The helper method should include a fetch PATCH request to `localhost:3000/team-members/id`.
* The only attribute that should be updated is the `stars` attribute. Its value should increase by 1 each time the fetch request is called.
* Add an `onClick` event handler for this button that invokes the above helper method.

#### 2. Write a helper method in `App.js` that updates an existing team member in the local state.
* Inside the helper method, map through the array of team members from the local state. Write conditional logic that checks if the member that's being updated matches any of the existing members. If there's a match, return the member that's being update. If not, return the current member in the loop.
* Save the return value of this iteration to a new variable.
* Invoke `setState()` to update the local state. The new value for the team members attribute should be the newly created variable.

#### 3. Send down our new helper method as props to `TeamContainer.jsx`.

#### 4. Send down this helper method as props AGAIN to `TeamMember.jsx`.
* Inside the helper method for updating a team member in `TeamMember.jsx`, invoke this helper method from props. Pass in the updated team member's instance as an argument.

## DELETE deliverables

#### 1. In `TeamMember.jsx`, create an event handler for the "Remove" button.
* Create a helper method that gets invoked when the user clicks on the `Remove` button for a team member.
* The helper method should include a fetch DELETE request to `localhost:3000/team-members/id`.
* Add an `onClick` event handler for this button that invokes the above helper method.

#### 2. Write a helper method in `App.js` that deletes an existing team member in the local state.
* Inside the helper method, use the `filter()` array method to filter out the team member that's being deleted.
* Save the return value of this iteration to a new variable.
* Invoke `setState()` to update the local state. The new value for the team members attribute should be the newly created variable.

#### 3. Send down our new helper method as props to `TeamContainer.jsx`.

#### 4. Send down this helper method as props AGAIN to `TeamMember.jsx`.
* Inside the helper method for deleting a team member in `TeamMember.jsx`, invoke this helper method from props. Pass in the deleted team member's id as an argument.

## Extra deliverable: search functionality

#### 1. Add a search term attribute to the local state in `App.js`.
* Pass down this value as props to `Search.jsx`.

#### 2. In `Search.jsx`, create an event handler for the input field.
* Set the value of the input field to be the value passed down from props.
* Create a helper method that gets invoked every time the user interacts with the input field. Create an `onChange` event handler for the input field and invoke this helper method.

#### 3. In `App.js`, create a helper method that updates the search term in the local state.
* Use `setState()` to change the state.

#### 4. Pass down this new helper method as props to `Search.jsx`.
* In the event handler helper method in `Search.jsx`, invoke this helper method passed down from props. Pass in the `event.target.value` as an argument.

#### 5. Create a helper method in `App.js` that filters the array of team members.
* Instead of passing down the local state as props, pass down this new array to the `TeamContainer` component.

## App preview
Once you're done with all these deliverables, here's what your app shoud look like!
![screenshot of react app](https://i.imgur.com/9zYkdOR.png)

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
* Optional: Install JSON View as a Google Chrome Extension to help you view JSON documents.

React Developer Tools: https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation
* Optional: Install React Developer Tools as a Google Chrome Extension to help you view React component hierarchies in the browser.