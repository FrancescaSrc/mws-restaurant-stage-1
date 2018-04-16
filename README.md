# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Project - Restaurant Reviews

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, this is my version of Restaurant Reviews.
In **Stage One**, I have converted the static site into a responsive mobile-ready web application that works on 
different sized displays and accessible for screen reader use. 
I have implemented a service worker for offline rendering to provide a better experience for your users with no or slow internet connection.

### Specification

The application is meant to work on a Chrome browser. 

### Installing

1. Clone or download the repository and save it in folder mws-restaurant-stage-1.

2. start up a simple HTTP server to serve up the site files on your local computer. 
Python has some simple tools to do this, and you don't even need to know Python. 
For most people, it's already installed on your computer. 
In a terminal, check the version of Python you have: `python -V`. 
If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` 
(or some other port, if port 8000 is already in use.) 
For Python 3.x, you can use `python3 -m http.server 8000`. 
If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to 
download and install the software.
You can use any other Web Server such as Tomcat. 
For Tomcat: copy the project folder under the tomcat\webapps\ folder

2. With your server running, start Chrome webbrowser and visit the site: `http://localhost:8000/mws-restaurant-stage-1/`

3. In case you need to change your port number, please change it in file dbhelper.js


### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 



