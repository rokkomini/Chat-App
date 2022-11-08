# Simple chat app
Created with Typescript, React and Chakra UI, Express and MongoDB.
## How to run with docker
### 1. Clone repository
`Git clone https://github.com/rokkomini/Chat-App.git`
### 2. Download dependencies
`npm install`
### 3. Run with docker
`docker compose up --build`

## Run in development without docker

`npm run dev` to start client and server concurrently
alternatively:
### 1. Clone repository
`Git clone https://github.com/rokkomini/Chat-App.git`
### 2. Download dependencies
`npm install`
### 3. Create .env files in packages/server and packages/client
#### Server
- SERVER_PORT= your port
- MONGO_URL= url to your mongo database
- JWT_SECRET= your secret
#### Client 
- REACT_APP_BASE_URL=url to server
### 4. Run server and client concurrently
`npm run dev` 
#### Alternatively: 
##### Server
- `cd packages/server/src && node server.ts`

##### Client
- `cd packages/client && npm start`