const url = require('url'),
  http = require('http'),
  fs = require('fs'),
  https = require('https'),
  httpProxy = require('http-proxy');

let connectionAttempts = 0;
let proxy;
const connectProxy = (reconnect = false) => {
  proxy = httpProxy.createProxyServer();
  proxy.on('error', (err, req, res) => {
    if (reconnect) {
      console.log(err);
      console.log('Reconnecting...');
      res.status(500).end();
      connectProxy(connectionAttempts < 2);
      connectionAttempts++;
    } else{
      console.log('Please verify your JSON-Server');
      throw err;
    }
  });
  proxy.on('open', (req, res) => {
    connectionAttempts = 0;
  });
}
connectProxy(true); 

const MockRouting = (req, res) => {
  if (process.env.RAZZLE_MOCK_SERVER_ENABLED === 'true') {
    readMockServer(req, res);
  } else {
    readMockFile(req, res);
  };
};

const readMockFile = (req, res, next) => {
  const requestPath = req.baseUrl;
  const filePath = `${__dirname}${requestPath}.json`;
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (!err) {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      }
      else{
        res.status(500).json({message: err.message});
      }
    });
  }
  else if (next){
    next();
  }
  else {
    res.status(404).json({message: 'File not found'});
  }
}

const readMockServer = (req, res) => {
  const requestPath = req.baseUrl;
  var reqUrl = `${process.env.RAZZLE_MOCK_HOST}:${process.env.RAZZLE_MOCK_PORT}${requestPath}`;
  proxy.web(req, res, {target: reqUrl});
};
module.exports = {
  MockRouting,
  readMockFile,
  readMockServer
}