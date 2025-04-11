# Interview Scheduler

## Setup

Install dependencies with `npm install`.

Note: this project requires Node version 16+

## Running Webpack Development Server

```sh
npm run dev
```

## Running Jest Test Framework

```sh
npm test
```
## Quick start code and paths

Frontend http://localhost:3000/
```sh
cd ~/lighthouse/scheduler
npm run dev
```

Backend http://localhost:8001/
```sh
cd ~/lighthouse/scheduler-api
npm start
```

Project psql scheduler_development
```sh
cd ~/lighthouse/scheduler
sudo service postgresql start
psql -U development
```

Jest
```sh
cd ~/lighthouse/scheduler
npm run test -- --watchAll
```

Cypress
```sh
cd ~/lighthouse/scheduler
export DISPLAY=:0
npm run cypress
```

Cypress psql scheduler_test 
```sh
psql -U development -d scheduler_test
```

Cypress backend
```sh
cd ~/lighthouse/scheduler-api 
npm run test:server
```

**Run the scheduler_api server with NODE_ENV=test npm start and reset the test database by making a GET request to http://localhost:8001/api/debug/reset.**

**Running Cypress needs 3 terminals: Frontend, Cypress backend, Cypress**
