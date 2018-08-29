import http from 'http';
import app from './server/index';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  // eslint-disable-next-line no-console
  console.log('🚀 started!');
});

if (module.hot && process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server/index', () => {
    // eslint-disable-next-line no-console
    console.log('🔁  HMR Reloading `./server/index`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server/index').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
