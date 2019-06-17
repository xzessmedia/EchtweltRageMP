# Echtwelt Reborn Rage MP on base of NodeJS+MongoDB+React/SemanticUI

Unfinished Server but a good starter platform and development setup.

To discuss and get help please join this Discord (Please don't use issue tracker for discussion)
https://discord.gg/KmPZy9f

Looking forward to your contributions to make this repository successful and alive :)

### Requirements
- git (https://git-scm.com/)
- nodejs (use the LTS version https://nodejs.org/en/)
- mongodb (https://www.mongodb.com/download-center/community)

#### For Deployment:
- docker (https://docs.docker.com/docker-for-windows/install/)
- docker-compose (https://docs.docker.com/compose/install/)

### Installation
- Linux only: Just execute 'install.sh' and skip the next steps

- Install gulp 'npm install -g gulp'
- For Development: Copy a fresh RageMP Server into the GameServer Directory so the executable server is under GameServer/server.exe
- Make sure you have npm installed and MongoDB
- enter cmd and type "npm install" in each of these Directories: ClientSource, ClientSource/CEF and ServerSource

### Building
On Linux you can just call 'buildall.sh'

On Windows you can simply use the batches in the root of this repository

1. Build CEF: enter ClientSource/CEF and run "npm run-script build"
2. Build Client: Enter ClientSource and run "npm run-script build"
3. Build Server: Enter ServerSource and run "npm run-script build"

All files will be copied to the GameServer Directory so you are ready to go
Database will install itself

### Deployment on Live Server

#### ** Dont't run a unsecured mongodb server on a public machine! **

The following should give you a start and should be secured by yourself
before uploading on a remote server!

##### Master your tools


#### Way 1

- On the target machine install docker
- git clone the repository to the machine
- Run DeployServer.sh

#### Way 2

- Install docker on your development machine
- Self-Host a private docker registry
- Build the container 'docker run --tag "ewreborn" .'
- Push ewreborn into your private registry
- Change docker-compose.yml so it uses the image of the docker registry

Optional: Edit the docker-compose.yml to open other ports i.e

Make sure you have docker-compose installed!

cd into the root directory of this repository and enter "docker-compose build" and then "docker-compose up -d"

#### ** Dont't run a unsecured mongodb server on a public machine! **

### Frontend
As Frontend I used React together with SemanticUI.
To start a development server you can run "npm start" inside ClientSource/CEF.

You can checkout the routes inside the ClientSource/CEF/src/index.js to see what we have yet

https://www.youtube.com/watch?v=f0z5HJUnpwc

### Tools
- Visual Studio Code for development (https://code.visualstudio.com/)
- Robomongo for Database Administration (https://robomongo.org/)
