# FCC-File-Metadata-Microservice
This project was coded as part of the FreeCodeCamp Apis and Microservices Projects - File Metadata Microservice. You can also try it out here: https://jumpy-twist.glitch.me/

## To use this:
1. Ensure you have node.js installed. If not install from https://nodejs.org/en/
2. Clone/download this repo
3. (Skip this if you used git clone) Unzip the downloaded file. 
4. Open command prompt (for windows, win + r -> cmd -> enter)
5. Change directory into the FCC-Timestamp-Microservice folder
6. This project needs express, cors & multer, do install using npm if you do not have it
7. Run the command Node server.js, you should get a reply of "Your app is listening on port 50023" (50023 is the port i specified to listen on, NOTE: if you want to dynamically assign ports, change the codes in the server.js file from app.listen(50023... to app.listen(process.env.PORT... )
8. Now go your localhost with the assigned port, 127.0.0.1:50023 and refer to that for usages

# If you want to try doing this project:
You can either visit http://freecodecamp.com
OR
Clone the base Repo from FCC: https://github.com/freeCodeCamp/boilerplate-project-filemetadata/
and Ensure that you meet all the User Stories below:

# User Stories :
1. I can submit a form object that includes a file upload.
2. The from file input field has the "name" attribute set to "upfile". We rely on this in testing.
3. When I submit something, I will receive the file name, and size in bytes within the JSON response.
