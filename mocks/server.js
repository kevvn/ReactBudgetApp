const jsonServer = require('json-server');
const dotenv = require('dotenv');
const path = require('path');
const { readMockFile } = require('./index');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

dotenv.config();

if (process.env.RAZZLE_API_PATH) {
  const API_PATH = process.env.RAZZLE_API_PATH || '/api';
  const MOCK_PORT = process.env.RAZZLE_MOCK_PORT || 3004;

  server.use(API_PATH + '/*', readMockFile);
  server.use(middlewares);
  server.use(API_PATH, router);
  server.listen(MOCK_PORT, () => {
    console.log('JSON Server is running');
  });
}
else{ 
  console.log('Create your .env. Please read README.md file for more information');
}