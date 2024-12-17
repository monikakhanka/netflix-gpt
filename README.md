## Creating React app using CRA

- npx create-react-app netflix-gpt

## Setup tailwind

- npx create-react-app my-project
- cd my-project
- npm install -D tailwindcss
- npx tailwindcss init
- Configure your template paths in tailwind.config.js
- Add the Tailwind directives to your CSS @tailwind directives to app.css
- start build process

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
