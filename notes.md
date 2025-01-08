## Creating React app using CRA

- npx create-react-app netflix-gpt

## Setup tailwind

- npx create-react-app my-project
- cd my-project
- npm install -D tailwindcss
- npx tailwindcss init
- Configure your template paths in tailwind.config.js
- Add the Tailwind directives to your CSS @tailwind directives to app.css
- Routing of app
- Header
- Login form
- Sign up form
- form validation
- useRef hook

## Setup firebase authentication

- firebase setup
- deploying app to production
- firebase authentication
- create sign up user account using signupuser api
- write firebase sign up and sign in logic

## Install Redux toolkit and redux react

- npm install -D @reduxjs/toolkit
- npm install react-redux
- create redux store - appStore and add reducer (user: userReducer)
- create user slice and export reducer and actions
- add provider to the App and provide the store as appStore

- dispatch action on sign in or sign up, update profile, sign out
- logic for dispatch should be written at the central level hence in the body.js or app.js
- use onAuthChange api of firebase to dispatch on state change
- use constants file for hard code values

## Bug fix

- Sign up user displayName and photoURL
- If the user is not loggedin redirect to Login page and vice-versa
- unsubscribe onAuthStatechange callback

## build browse page

- fetch the movies from TMDB
- created a custom hook for fetching movies and dispatching them in store
- features in browse page:

  - Main container
    - video background
    - video title
  - secondary container
    - movie list \* n
      - cards \* n

## Main container

- create Movie title, movie background component
- add trailer video to movies slice
- create custom hook to fetch trailer
- update store with trailer data
- use youtube embed code for displaying trailer and make it autoplay and mute

## Secondary container

- Movie list component
- usePupularMovies, useUpcomingMovies, useNowPlayingMovies
- created browse page

## GPT Search feature

- button to toggle between gptSearch page and main browser
- gpt store to store the toggle value and useSelector to access this variable
- gpt Search bar
- gpt Search suggestions
- multilanguage feature
- GPT api integration
- Open AI api key
- gpt search api call
- memoization
- fetched gpt movie suggestion from TMDB
- created gpt slice and added data
- reused movieList component to make movie suggestion container
- memoization
- .env file for open api key
- made website responsive

## Features:

- Login /Sign up
  - Sign in / sign up form
  - redirect to browse page on authentication
- Browse (after authentication)
  - Header
  - Main movie
    - trailer in background
    - title and description
    - movie suggestion
      - movieLists \* n
- Netflix gpt
  - search bar
  - movie suggestion

## Project directory structure

- Public - all public files
- src
  - components - all components
  - utils - for utility functions

## Setting up routing

- npm install -D react-router-dom
- createBrowserRouter and RouterProvider
