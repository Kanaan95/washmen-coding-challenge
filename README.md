# Washmen Coding Challenge

## Prerequisites
There are some prerequisites for this project. You need to have NodeJs and Angular CLI installed on your laptop. If you want to run this on your laptop you need to have these on your laptop.
- NodeJs
- Angular CLI
- Typescript
- gulp.js
- Docker

## Project
This is a project which demonstrates developing and running Angular application with NodeJS. 

## Objective
A user would like to reach out to his partners with offices within a given range of Starbucks Cafe Central London (51.5144636,-0.142571), to invite them for a business meal. We need to have an intuitive UI that calls an API to show the contact details of those partners within a given range (in kilometers). 

## Running the app
You can clone this project and run it on your machine.

    npm install
    npm start
    
## Building the app
When we build the Angular code, the Angular CLI uses a webpack internally to build and bundle the entire code into few files. We can use the same for the nodejs server as well.
First, we need to install a webpack globally and in the project as well.

    npm install webpack -g
    npm install webpack --save

We can achieve complete automation with the gulp. All the following steps can be made automated with the gulp.

- Clean the directory if exists
- Create a directory if not exists to put all the production build
- Build Angular code with ng build
- Place the Angular code into production directory
- Build the server code with the webpack
- Place the server code into production directory
- Finally, zip all the code

```
// Install gulp globally
npm install gulp -g

// Install as dev dependency
npm install -D gulp gulp-zip fancy-log del webpack-stream 

// gulp              - core library
// gulp-zip          - zipping the code
// fancy-log         - logging
// del               - deleting files/folders
// webpack-stream    - Build with webpack
```
## Docker
If you do not have Docker installed on your local machine, visit this [link](https://docs.docker.com/get-docker/)
If you want to create a Docker image and run it on the local Docker, here are the steps.

```
// Replace <image-name> with an image name of your choice
docker build . -t <image-name>

// Replace <image-name> with the same as above, <container-name> with a name of your choice. 
// If ommitted, a name will be created automatically
docker run -d -p  5000:5000 --name <container-name> <image-name>

// Check the container
docker ps
```

Or you directly pull the image from docker using the following step.


```
// Docker will pull the latest image from docker hub if the image is not found locally

docker run -d -p  5000:5000 --name <container-name> kanaan95/coding-backend
```
You can access the application on the web at this address http://localhost:5000

# Questions

For questions about this project, please see my GitHub at kanaan95, or reach out by email at kanaan95@live.com
