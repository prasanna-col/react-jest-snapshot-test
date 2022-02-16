------------------------------------------------------------------------------
In test file, (react-jest-snapshot-testing (unit testing))
"test" - used use to test the function (normal function ie, outside the DOM)
"it" - used to check the component (DOM).
"describe" - used to check the functionality inside the component. 

------------------------------------------------------------------------------

Dockerfile explanation: 

    FROM node:alpine  // first we need node images so we call node

    WORKDIR '/app'  // create a folder in Dockerfile

    COPY package.json . // copy the pkg.json in same root folder
    RUN npm install  // need this for install the packages
    COPY . .    //copy the all contents in the Dockerfile
    CMD ["npm", "start"]   // then the run the application in command line (cli)

-----------------------

commands in Docker:
 1) run the following command in root folder fot build the project
    
    docker build . -t ImageName  (ImageName - is user defined whatever you give)

    docker images ls   // to see the images are available

    docker run imageName   // run the project with the crt syntax

 2) Go to the other terminal and run the cmd
    
    docker ps  // where you can see the docker IDs

    docker exec -it CONTAINER_ID sh    // to execute the project in shell , where give thet "npm start" cmd to run. 

------------------------------------------------------------------------------



