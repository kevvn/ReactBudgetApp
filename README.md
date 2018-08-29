# Why `MARS`?

Macy's has hundreds of developers, creating hundreds of application, in multiple locations across the country, and even around the world :earth_americas:. More and more of these teams are gravitating towards [React](https://reactjs.org/docs/hello-world.html)-based solutions. The goal of `MARS` is to provide a common, repeatable, and performant :bicyclist: platform solution for any team building a React app.

With MARS you get following benefits and more:

* Universal JavaScript - Your JavaScript code can be executed both on the client and the server.
* Live Reload - Both the client and server can be updated without restarts.
* ES6 JavaScript support - Supports ES6 features through Webpack and Babel.
* Routing - Uses React's powerful declarative routing [React-router 4](https://reacttraining.com/react-router/)
* [Redux](https://redux.js.org/basics/usage-with-react) - Tooling :nut_and_bolt: with SSR, async data fetching, and state change logging (for debugging), right out of the box!
* [Jest](https://github.com/facebook/jest) - Test runner setup/config
* Progressive web app - Native app-like features on supported browsers
* Zero configuration - No need for build configuration. Just start editing `src/shared/pages/home/Home.js` and you're off!

## Getting Started

Please refer [this Confluence page](https://confluence.federated.fds/display/AFD/MARS+Setup) on how to get started

---

### Adding a new page

_src/shared/Router.js_ - This is the main router for the application.

```Javascript
// import a page component in the router
import NewPage from './pages/newPage/NewPage'
...
// map the component to a URI pattern with react-router
<Route path="/" component={Home} />
<Route path="/newPath" component={NewPage} />
...
```

# Mock Data

There are 2 ways to use mock data on your application.
- Create your json file on /mocks folder following your path structure. 
Eg.: 
> - Your url:
localhost:3000/api/discover/v1/browse
>- Your folder structure
/mock/api/discober/v1/browse.json

* Using JSON-SERVER
JSON-Server library is installed on your app and ready to use. Read more about it [here](https://www.npmjs.com/package/json-server)

By using JSON-SERVER, it will also seek for the file on the folder structure and then it will responde following the RESTFUL 

### Getting started

Create .env file on root folder.

```Javascript
...
// Enable MOCK service
RAZZLE_MOCK_SERVICE_ENABLED=true
// Set to TRUE to use JSON-SERVER and FALSE to 
RAZZLE_MOCK_SERVER_ENABLED=true
// mock server hostname
RAZZLE_MOCK_HOST=http://localhost
// mock port
RAZZLE_MOCK_PORT=3004
// API path
RAZZLE_API_PATH=/api
...
```

### Starting server

After creating the .env file it's pretty straight forward to start json-server. 

Open your terminal on the root folder and run:

```
node mocks/server.js 
```