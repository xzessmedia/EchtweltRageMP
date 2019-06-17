## Echtwelt Reborn Rage MP on base of NodeJS+MongoDB+React/SemanticUI

Unfinished Server but a good starter platform and development setup.

To discuss and get help please join this Discord (Please don't use issue tracker for discussion)
https://discord.gg/KmPZy9f

Looking forward to your contributions to make this repository successful and alive :)

### Requirements
- npm (npmjs.com)
- mongodb

### Installation
- Copy a fresh RageMP Server into the GameServer Directory so the executable server is under GameServer/server.exe
- Make sure you have npm installed and MongoDB
- enter cmd and type "npm install" in each of these Directories: ClientSource, ClientSource/CEF and ServerSource


### Building
On Windows you can simply use the batches in the root of this repository

1. Build CEF: enter ClientSource/CEF and run "npm run-script build"
2. Build Client: Enter ClientSource and run "npm run-script build"
3. Build Server: Enter ServerSource and run "npm run-script build"

All files will be copied to the GameServer Directory so you are ready to go
Database will install itself


### Frontend
As Frontend I used React together with SemanticUI.
To start a development server you can run "npm start" inside ClientSource/CEF.

You can checkout the routes inside the ClientSource/CEF/src/index.js to see what we have yet