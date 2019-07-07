# Echtwelt Reborn Rage MP on base of NodeJS+MongoDB+React/SemanticUI

[![GitHub](https://img.shields.io/github/license/xzessmedia/EchtweltRageMP.svg)](#)

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
- Enter cmd and type "npm install" in each of these Directories: ClientSource, ClientSource/CEF and ServerSource
- Finally edit /ServerSource/src/config/modsettings.json and add your database credentials. If you are using docker-compose, you can leave it

### Building
On Linux you can just call 'buildall.sh'

On Windows you can simply use the batches in the root of this repository

1. Build CEF: enter ClientSource/CEF and run "npm run-script build"
2. Build Client: Enter ClientSource and run "npm run-script build"
3. Build Server: Enter ServerSource and run "npm run-script build"

All files will be copied to the GameServer Directory so you are ready to go
Database will install itself

### Deployment on Live Server

https://youtu.be/AUCaTNtTtqU

#### ** Dont't run a unsecured mongodb server on a public machine! **

The following should give you a start and should be secured by yourself
before uploading on a remote server!

##### Master your tools

#### Manual Deployment
If you want to deploy manually instead of using docker, you have to copy the node_modules directory into your server root!
If you want to use docker, just follow way 1 or way 2


#### Way 1

- On the target machine install docker
- git clone the repository to the machine
- Run 'sudo sh install.sh && sudo sh buildall.sh && sudo sh DeployServer.sh'

#### Way 2 (Recommnended)

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

### Custom Vehicles
Optional: You can download the last EchtweltRageMP Modpack here https://www.echtwelt-life.de/filebase/index.php?entry/13-echtweltragempmodpack/
Password to access: OpenSource

To install, just copy the "dlcpacks" directory into your gameservers "client_packages" directory


### Whitelisting and Woltlab
Optional: To use our whitelisting, you can use this plugin on your woltlab server
https://github.com/DasChaosAT/WbbVerify

But be careful what you are doing or you are backdooring your woltlab site very easy.
This can be huge security leak!
