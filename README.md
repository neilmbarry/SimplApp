# Simpl.

Simpl. is a full stack e-commerce platform for wardrobe sharing. Users can query, filter and sort the online database of products. Authenticated users can also add favourites, add reviews for hosts and products as well as submit their own items of clothing to the database.

> Live demo [_here_](https://simp-app.vercel.app/).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Code Structure](#code-structure)
- [Setup](#setup)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Technologies Used

- React
- Redux
- Node.js
- Mongo DB
- Mongoose
- Express

## Screenshots

Search results page
![Example screenshot](https://i.imgur.com/80dweEb.png)
Product page
![Example screenshot](https://i.imgur.com/azTlRWO.png)
Add product page
![Example screenshot](https://i.imgur.com/aaAVesD.png)

## Code structure

This application can be divided into two distinct parts: the front end and the back end.

On the front end is a react application that implements Redux for state management, custom hooks for fetching data and CSS modules for styling. It has various routes to navigate through the application some of which are protected to allow only authenticated users access.

On the back end is an express application using mongoose to communication with a mongoDB database. The code is divided into three main concerns being routes for different api calls, models for modeling the database entries, and controllers for describing the data transformations and flow.

A react component
![Example screenshot](https://i.imgur.com/gnu7Kff.png)
useFetch hook
![Example screenshot](https://i.imgur.com/oEDKXyB.png)
A controller
![Example screenshot](https://i.imgur.com/CSa3obY.png)

## Setup

- Clone repository to your local device
- Navigate to the ship-head folder
- Run `npm install` to install all the dependencies
- Run `npm start` to start the React project, this will open in a new browser window.
- Run `npm run server` to to run the development server that the main application will connect to.
- You will need to add your own config.env file the root folder with the following variables to run the server and connect to your own MongoDB database:

> NODE_ENV='development'

> PORT=8000

> JWT_SECRET={YOUR_SECRET}

> JWT_EXPIRES_IN=90d

> DATABASE=mongodb+srv://{YOUR_MONGO_DB_DATABASE}

> DATABASE_PASSWORD={YOUR_DB_PASSWORD}

## Project Status

Project is: _complete_

## Room for Improvement

Below are some area to be improved or expanded upon.

- User/product image uploads
- Adding location data

## Acknowledgements

- The design of this project was based on [Turo](https://turo.com/ca/en).

## Contact

Created by [@neilbarry](https://www.neilbarry.com/) - feel free to contact me!
