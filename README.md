# DOT NYC - Bike Racks Mapping and Dashboard

## Table of Content

1. [Description](#Overview)
2. [App Evaluation](#Usage)
3. [Product Specs](#Product-Specs)
4. [Wireframe](#Wireframes)
5. [Manual](#Manual)
6. [Installation](#Installation)
7. [Code Structure](#Code)
8. [Technology](#Documentation)

### Description

The DOT required an interactive map and dashboard which will use NYC Open data set for City bike racks and will display it on the map accordingly through Leaflet.JS and React. It will also provide the user with option to report an issue to DOT within the map. The motivation for the project was to provide an alternative to current City Rack map viewer which required user’s to navigate to a different site and to use ARTS for reporting an issue.

### App Evaluation

- **Category:** Web App
- **Computer:** This app can be used in any device that supports a Web browser.
- **Story:** The project will help reduce the time necessary for the user to report an issue to DOT and similarly it will provide the DOT team with a more unified way to receive the issues and manage the City Racks data set more efficiently
- **Market:** DOT and anyone who has acess to the website.


## Product Specs

- [x] User can view various Bike Rack Location on the Map.
- [x] User can submit bike rack issues to DOT.
- [x] User can request new Bike Rack Location.
- [x] User can search up a particular bike rack location.
- [ ] Time Slider
- [ ] Status Dashboard



## Wireframe

![](https://i.imgur.com/5Y3kpvR.jpg)


## Manual

- The end user will have the ability to select a green bike rack “point” and report issues regarding the selected bike rack. The point will call a card view which will show the necessary details about the bike rack. They can select from "Report Issue", "Report damage", and "Report Missing". After selecting the desired issue, the user will submit the request to NYC DOT

    ![](https://i.imgur.com/qct46V6.jpg)
    
    ![](https://i.imgur.com/PoFXx39.jpg)

- There will be a location pointer that the user can navigate to any place on the Map and use “Request new Location” button at the bottom of the card. The user can also type in additional comments as well.
 
    ![](https://i.imgur.com/oPlyLdJ.jpg)

- The search functionality can be used to search up any particular location in the Map

    ![](https://i.imgur.com/YmcAQfr.jpg)

- For a detailed instruction, the user can click on the "I" icon on the top right of the navigation Bar.

    ![](https://i.imgur.com/zZLFXaU.jpg)


### Installation

In order to properly properly run the App we must follow the following steps.

1. Download the D3 Project from [Github](https://github.com/nafeeur/DOT_Internship_2022)
   
   - Go to the GitHub page. Click on the green Code button and click Download Zip
   
       ![](https://i.imgur.com/KjRRQPB.jpg)
    
    - Locate the downloaded Zip file in the appropiate folder then Unzip it. 
    
        ![](https://i.imgur.com/HmvNrsL.jpg)

2. Download and Install [VSCode](https://code.visualstudio.com/) and Run the App. *Other IDEs can also be used. However, for this tutorial Visual Studio Code is used*
    - Open up VS Code. Navigate to the top menu and click on file then click Open Folder and locate the project in the Device.
    
       ![](https://i.imgur.com/syU7AjA.jpg)
       
       ![](https://i.imgur.com/AsysAya.jpg)
       
       ![](https://i.imgur.com/B4TUFrp.jpg)

3. Run the Project.
    - Navigate to the top menu bar then click on terminal and then *New terminal*
    
        ![](https://i.imgur.com/2LfcH2M.jpg)
   
   - Then run in the following commands accordingly.
     #### `npm install` 
        ![](https://i.imgur.com/LRWETg0.jpg)
     #### `npm start` 
        ![](https://i.imgur.com/s5H4xb5.jpg)

        ![](https://i.imgur.com/gVkgEWD.jpg)
        - It will open up a browser session at `localhost:300` with the App running. if not simply go to http://localhost:3000
             
        ![](https://i.imgur.com/W7V0R1S.jpg)
        

### Code Structrue 


![](https://i.imgur.com/VTDdb3w.jpg)

- Map.JS contains all the necessariry and core codes for the dynamic Map as well as the user Card view and Buttons
- NavBar.JS contains the codes for the navigation menu at the Top of the map and search functionalities
- Info.Js contains the instruction view for the Web App
- Slider.JS (Incomplete) contains the code for the time Slider


## Technology

This program was writen to be used across any platform that supports that supports a Web Browser. Our goal is to create a program that can rely on as little outside packages as possible while remanining future proof and innovative. We decided to use the following technologies for this project:

1. [React.JS](https://reactjs.org/) is a JavaScript Library that makes it painless to create interactive UIs. Design simple views for each state in  application, and React will efficiently update and render just the right components when data changes.

2. [Leaflet.JS](https://www.tensorflow.org/) Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 39 KB of JS, it has all the mapping features most developers ever need.

3. [React-Leaflet](https://react-leaflet.js.org/) provides bindings between React and Leaflet. It does not replace Leaflet, but leverages it to abstract Leaflet layers as React components. As such, it can behave differently from how other React components work, notably:


