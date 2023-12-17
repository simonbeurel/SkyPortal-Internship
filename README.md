# SkyPortal-Internship
## Summary : 
This application is a very small application using NextJS technology. 

The goal of this application is to show a "fake data" for a user, and give to him the possibility to download in a JSON format this fake data.

## Why NextJS ? 
The constraint of using NextJS is because with NextJS you can use a Static Rendering or a Dynamic Rendering. The main goal of Static Rendering is the fact that once the project is built, it is "cached" for the user, so he doesn't have to download some new resources or things like this. Here, for this project, you can find this behaviour with a specific variable in the fake data which is called "generatedNumber". This variable is generated every build, but once the project build, if you press F5 hundred times, this variable will always be the same because we are using Static Rendering.

## How to launch this project ? 
### Using Git :
- ```git clone https://github.com/simonbeurel/SkyPortal-Internship```
- ```cd SkyPortal-Internship/skyportal-internship-nextjs```
- ```npm run build```
- ```npm start```
- Go to http://localhost:3000 on any web browser
### Using Docker : 
If you have Docker installed on your machine, you can pull the project's image. 

- ```docker pull simonbeurel/skyportal-internship:latest```
- ```docker run -p 3000:3000 simonbeurel/skyportal-internship:latest```
