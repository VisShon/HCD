# Official Website for the Department of HCD, IIIT-Delhi

Welcome to the official repository for the Department of Human-Centered Design (HCD) website developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project aims to provide a platform to showcase updates, information, and resources related to the HCD department at Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi).

- [Figma Community Design](https://www.figma.com/community/file/1115290531089636223): Access our Figma community design for UI/UX reference.
- [Official Website](https://hcd.iiitd.ac.in/): Visit our official website to explore more about our department and its activities.
- [GitHub Repository](https://github.com/VisShon/HCD): Access our GitHub repository for the latest updates and contributions.

## Contact

For any questions, feedback, or inquiries regarding the HCD department website, please contact:
[Department of Human-Centered Design](mailto:hcd@iiitd.ac.in)

# Comprehensive setup and deploymentGuide
Welcome to the comprehensive setup and deployment guide for our Node.js and React application. This guide provides detailed instructions for setting up the development environment, managing the application server, and making necessary changes to the application structure and content. The document is structured to facilitate both new developers and experienced professionals in efficiently setting up and maintaining the application on local and remote machines.

The directory structure you've posted indicates a project that appears to be a web application with both backend and frontend components. Here’s a breakdown of the structure:

#### Top-Level Directories and Files
- **backend**: This directory contains the backend application code.
- **backend-old**: Presumably an older version of the backend, kept for reference or rollback purposes.
- **frontend**: This directory contains the frontend application code.

#### Backend Directory
- **app.js**: Likely the main application file for the backend.
- **bin/www**: Typically, the entry point for starting the server.
- **package.json & package-lock.json**: These files manage the backend’s dependencies.
- **public**: Contains publicly accessible files for the backend.
  - **asset-manifest.json, favicon.ico, index.html, manifest.json, robots.txt**: Standard web files.
  - **static**: Contains static assets like CSS, JavaScript, and media files.

#### Backend-old Directory
- Similar structure to the `backend` directory, probably contains a previous version of the backend code.

#### Frontend Directory
- **build**: Contains the production build of the frontend application.
  - **asset-manifest.json, favicon.ico, index.html, manifest.json, robots.txt**: Standard web files.
  - **static**: Contains static assets for the frontend similar to the backend static directory.
- **package.json & package-lock.json**: These files manage the frontend’s dependencies.
- **postcss.config.js**: Configuration file for PostCSS, a tool to transform CSS.
- **public**: Publicly accessible files for the frontend.
- **src**: Source code for the frontend application.
  - **assets**: Contains images, icons, and other static assets.

Notable Patterns
1. **Mirroring Structure**: Both the `backend` and `frontend` have similar structures with their own `public` directories and `static` assets.
2. **Media Files**: Numerous media files (images, SVGs) are used in both the backend and frontend, likely for UI elements, icons, and other visual content.
3. **Build Artifacts**: The `build` directory in the frontend indicates the use of a build process, likely using tools like Webpack, Babel, or similar.

# Table of Contents

1. [Local Machine Setup](#local-machine-setup)
2. [Entering SSH](#entering-ssh)
3. [Download Server Files](#download-server-files)
4. [Install Node.js and npm](#install-nodejs-and-npm)
5. [Install nvm](#install-nvm)
6. [Procedure of Changes](#procedure-of-changes)
7. [React Structure](#react-structure)
8. [Server Setup](#server-setup)
9. [Running the Server](#running-the-server)
10. [Server Deamon](#server-deamon)
11. [Shell Script for Server Startup](#shell-script-for-server-startup)
12. [File and Directory Operations](#file-and-directory-operations)
13. [Node.js Server Configuration](#nodejs-server-configuration)
14. [Steps to Run the Application](#steps-to-run-the-application)


## Local Machine Setup
both of them at contentwise is updated as of June 12 2024.
- ls bali branch
kintsugi@machine:~/Documents/baligit/HCD-1$ ls
backend  backend-old  frontend  package.json  package-lock.json  Procfile  README1.md  README.md
backend-old is of machine ,not server
- ls main
it would contain : frontend,backend,other files

### Enter SSH
```ssh iiitd@<address>```

### Download Server Files
#download server files scp [options] [source] [destination]
```
scp -r iiitd@<address>:/home/iiitd/HCD-main ~/Documents/server
```

### Install Node.js and npm
```
sudo apt-get install nodejs npm
node -v
npm -v
```

### Install nvm
```
#install nvm14 required
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc  # or source ~/.zshrc depending on your shell
nvm install 14
nvm use 14
nvm alias default 14
```

### Procedure of Changes
- install prereq.
- clone main directory
- it would contain : frontend,backend,other files
- do all work in frontend
- yarn install
- yarn start
- ctrl+c

- cd backend
- rm public
- mkdir public
- copy frontend build data to backend public
- DONE ;0 

### React Structure
index.js routing
assets mediadata
data jsondata
pages reactpages
styles cssdata
componrnts reactcardpages

### Server Setup
#Fetch File and yarn install : Don't use github clone etc[signal died],just use wget and for link ,hover over download zip option at github repo and copy link
rm HCD-old #if any
mv HCD-main HCD-old
wget https://github.com/kintsugi-programmer/HCD/archive/refs/heads/main.zip
unzip main.zip
rm main.zip
cd HCD-main/backend
yarn install

### Running the Server
#stop server
sudo systemctl stop nginx
sudo systemctl stop apache2
sudo lsof -i :80
sudo kill 3686 #see PID no.

#manual run temp
cd HCD-main/backend/bin
sudo node www

#manual run temp or 
cd
./startup.sh

### Server Deamon
#stop server
sudo systemctl stop nginx
sudo systemctl stop apache2
sudo lsof -i :80
sudo kill 3686 #see PID no.

#server run deamon
sudo systemctl daemon-reload
sudo systemctl restart startup.service

#exit
exit

### Shell Script for Server Startup startup.sh
#old
```
#!/bin/bash
cd /home/iiitd/HCD-main/backend
sudo yarn start
```

#temp fix
```
#!/bin/bash
cd /home/iiitd/HCD-main/backend/bin
sudo node www
```

### File and Directory Operations
## ls
```

iiitd@hcd:~$ pwd
/home/iiitd
iiitd@hcd:~$ ls
HCD-main  history.txt  main.zip  nohup.out  package-lock.json  startup.sh
iiitd@hcd:~$ ls -aril
total 606372
396822 -rw-rw-r--  1 iiitd iiitd       116 Jun 12 09:38 .yarnrc
395971 drwxrwxr-x  3 iiitd iiitd      4096 Mar 26 17:19 .yarn
393588 -rw-rw-r--  1 iiitd iiitd       259 Jun 12 10:51 .wget-hsts
395535 -rw-------  1 iiitd iiitd     12167 Mar 23 09:49 .viminfo
393225 -rw-r--r--  1 iiitd iiitd         0 Feb 10  2023 .sudo_as_admin_successful
394075 -rwxr-xr-x  1 iiitd iiitd        62 Jun 12 10:58 startup.sh
393221 drwx------  2 iiitd iiitd      4096 Feb 28  2023 .ssh
393590 -rw-rw-r--  1 iiitd iiitd        66 Aug  7  2023 .selected_editor
393220 -rw-r--r--  1 iiitd iiitd       807 Jan  6  2022 .profile
393979 -rw-rw-r--  1 iiitd iiitd        84 Mar 23 08:19 package-lock.json
396823 drwxrwxr-x  2 iiitd iiitd      4096 Jun 12 09:40 .nvm
393269 drwxrwxr-x  4 iiitd iiitd      4096 Jan 31 12:19 .npm
395533 -rw-------  1 iiitd iiitd        58 Mar 23 08:34 nohup.out
393227 -rw-rw-r--  1 iiitd iiitd 620769677 Jun 12 10:51 main.zip
394158 drwxrwxr-x  3 iiitd iiitd      4096 Aug  7  2023 .local
395957 -rw-------  1 iiitd iiitd        20 Jun 12 09:32 .lesshst
393764 -rw-rw-r--  1 iiitd iiitd     22768 Jun 12 11:07 history.txt
393228 drwxrwxr-x  5 iiitd iiitd      4096 Jun 12 10:49 HCD-main
393587 -rw-rw-r--  1 iiitd iiitd        36 Feb 28  2023 .gitconfig
394122 drwx------  3 iiitd iiitd      4096 Jan 31 12:09 .config
393223 drwx------  3 iiitd iiitd      4096 Mar 26 17:19 .cache
393218 -rw-r--r--  1 iiitd iiitd      3771 Jan  6  2022 .bashrc
393219 -rw-r--r--  1 iiitd iiitd       220 Jan  6  2022 .bash_logout
393226 -rw-------  1 iiitd iiitd     19441 Jun 12 12:10 .bash_history
131073 drwxr-xr-x  3 root  root       4096 Feb 10  2023 ..
393217 drwxr-x--- 10 iiitd iiitd      4096 Jun 12 14:26 .
iiitd@hcd:~$ 

```

#Rename
```
mv old_filename new_filename
mv old_foldername new_foldername
```

#copy
```
cp -r /home/iiitd/HCD/backend /home/iiitd/HCD-main/
```


### Node.js Server Configuration
The provided code sets up a Node.js server using Express to handle both HTTP and HTTPS traffic. Here’s a breakdown of what each part of the code does:

#### `www` File

1. **Dependencies and Module Setup**:
   ```javascript
   const fs = require('fs');
   var express = require('express');
   var app = require('../app');
   var debug = require('debug')('backend:server');
   var http = require('http');
   var https = require('https');
   ```

2. **Reading SSL Certificates**:
   ```javascript
   const privateKey = fs.readFileSync('/etc/letsencrypt/live/hcd.iiitd.ac.in/privkey.pem', 'utf8');
   const certificate = fs.readFileSync('/etc/letsencrypt/live/hcd.iiitd.ac.in/fullchain.pem', 'utf8');
   const credentials = {
     key: privateKey,
     cert: certificate,
   };
   ```

3. **Port Normalization**:
   ```javascript
   var port = normalizePort(process.env.PORT || '80');
   var httpsport = normalizePort(process.env.PORT || '443');
   app.set('port', port);
   ```

4. **Creating HTTP and HTTPS Servers**:
   ```javascript
   var httpsServer = https.createServer(credentials, app);
   const redirector = express();
   redirector.get('*', (req, res) => res.redirect("https://" + req.headers.host + req.url));
   const httpServer = http.createServer(redirector);
   ```

5. **Starting Servers and Setting Up Event Listeners**:
   ```javascript
   httpsServer.listen(httpsport);
   httpsServer.on('error', onError);
   httpsServer.on('listening', onListening);

   httpServer.listen(port);
   httpServer.on('error', onError);
   httpServer.on('listening', onListening);
   ```

6. **Port Normalization Function**:
   ```javascript
   function normalizePort(val) {
     var port = parseInt(val, 10);
     if (isNaN(port)) {
       return val;
     }
     if (port >= 0) {
       return port;
     }
     return false;
   }
   ```

7. **Error Handling**:
   ```javascript
   function onError(error) {
     if (error.syscall !== 'listen') {
       throw error;
     }
     var bind = typeof port === 'string'
       ? 'Pipe ' + port
       : 'Port ' + port;

     switch (error.code) {
       case 'EACCES':
         console.error(bind + ' requires elevated privileges');
         process.exit(1);
         break;
       case 'EADDRINUSE':
         console.error(bind + ' is already in use');
         process.exit(1);
         break;
       default:
         throw error;
     }
   }
   ```

8. **Listening Event**:
   ```javascript
   function onListening() {
     var addr = httpsServer.address();
     var bind = typeof addr === 'string'
       ? 'pipe ' + addr
       : 'port ' + addr.port;
     debug('Listening on ' + bind);
   }
   ```

#### `server.js` File

1. **Express Setup**:
   ```javascript
   var express = require('express');
   var path = require('path');
   var app = express();

   app.use(express.json());
   app.use(express.urlencoded({ extended: false }));
   app.use(express.static(path.join(__dirname, 'public')));
   ```

2. **Catch-All Route**:
   ```javascript
   app.get('*',  (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });

   module.exports = app;
   ```

#### Explanation

1. **SSL Certificates**: The code reads SSL certificates from the specified paths, which are required to enable HTTPS.
2. **Port Configuration**: It normalizes the port values for HTTP and HTTPS.
3. **Server Setup**: It creates both HTTP and HTTPS servers. The HTTP server is set up to redirect all traffic to HTTPS, ensuring secure communication.
4. **Error Handling**: Functions to handle and log errors during server startup.
5. **Catch-All Route**: In `server.js`, it serves the `index.html` file for any route, allowing the front-end to handle routing (useful for single-page applications).

#### Usage

- **Starting the Server**: To start the server, you need to run the `www` script.
- **SSL Configuration**: Ensure that the SSL certificate paths are correct and the files are accessible.
- **Environment Variables**: Optionally, you can set `PORT` and `HTTPS_PORT` environment variables to customize the ports. If not set, it defaults to `80` for HTTP and `443` for HTTPS.

This setup ensures that all HTTP traffic is redirected to HTTPS, which is a common practice to enhance security by enforcing encrypted communication.
To run the provided Node.js application, follow these steps:

#### Prerequisites
1. **Node.js and npm**: Ensure Node.js and npm (Node Package Manager) are installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).
2. **SSL Certificates**: Make sure you have valid SSL certificates placed in the specified paths (`/etc/letsencrypt/live/hcd.iiitd.ac.in/privkey.pem` and `/etc/letsencrypt/live/hcd.iiitd.ac.in/fullchain.pem`).

#### Steps to Run the Application

1. **Project Structure**:
   Ensure your project directory looks something like this:
   ```
   your-project/
   ├── bin/
   │   └── www
   ├── public/
   │   └── index.html
   ├── app.js (if applicable, not shown in your example)
   └── server.js
   ```

2. **Install Dependencies**:
   Navigate to your project directory in the terminal and install the required Node.js packages.
   ```bash
   cd your-project
   npm install express debug
   ```

3. **Check SSL Certificates**:
   Ensure that the paths specified in your `www` script for the SSL certificates are correct and that the files are accessible. This might require sudo or root permissions depending on your server setup.

4. **Running the Application**:
   You can run the server using `node`. If your `www` file is located in the `bin` directory as shown, you can start it by running:
   ```bash
   node bin/www
   ```
   Alternatively, you might need to provide the correct path if your structure differs.

5. **Using a Process Manager** (Optional but recommended):
   To keep your server running and manage restarts in case of crashes, use a process manager like `pm2`:
   ```bash
   npm install -g pm2
   pm2 start bin/www
   pm2 save
   pm2 startup
   ```
   This will ensure your application runs in the background and restarts automatically on failure.

#### Additional Considerations

- **Permissions**: If you encounter permission errors while accessing the SSL certificates or binding to ports 80 and 443, you might need to run the command with `sudo`:
  ```bash
  sudo node bin/www
  ```

- **Environment Variables**: If you want to specify custom ports or other environment variables, you can set them before running the application:
  ```bash
  PORT=8080 HTTPS_PORT=8443 node bin/www
  ```

- **Debugging**: The script uses the `debug` module to log messages. You can enable debug messages by setting the `DEBUG` environment variable:
  ```bash
  DEBUG=backend:server node bin/www
  ```

- **Security**: Make sure your SSL certificates are correctly configured and up-to-date. Using Let's Encrypt is a good option for obtaining free SSL certificates.

By following these steps, you should be able to run your Node.js application with both HTTP and HTTPS support.

### Steps to Run the Application
- Local Machine : Run at Frontend till Changes Procedure done [Local Machine Setup](#local-machine-setup) & 6. [Procedure of Changes](#procedure-of-changes)
- Server : Run at Backend 9. [Running the Server](#running-the-server)
