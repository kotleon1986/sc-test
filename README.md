# Scalio Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Installation
Run `yarn install:dev` to install dependencies for both frontend and backend.

to install `yarn` globally run `npm i -g yarn`.

## Local
Run `yarn start` to concurrently start both applications on local

## Production
Frontend is available at: https://master--zen-bartik-e8d6bd.netlify.app  
Backend API is available at: https://cnv0msg6hd.execute-api.us-east-1.amazonaws.com/posts  

### App Description
The app starts with the home page where the user can input the post ID to search for the post. Once the "Send" button is pressed, the app sends request to the backend API to fetch the post by the specified ID. If post not found or is missing one of the main fields, the API will respond with corresponding error. Once the post data is delivered from the API, the app redirect user to the `/details` page where the both title and the body of the post is shown, along with the "Go Back" button to return to the home page.

### Technologies used
Frontend - Angular 13, Angular Material, NgRx, Jasmine  
Backend - NestJS, Serverless, AWS Lambda, Jest  
Deployment - Netlify, AWS  

