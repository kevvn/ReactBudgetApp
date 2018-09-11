/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/assets.json":
/***/ (function(module, exports) {

module.exports = {"client":{"js":"/static/js/bundle.db7268fb.js","css":"/static/css/client.c435f21f.css"}}

/***/ }),

/***/ "./mocks/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const url = __webpack_require__("url"),
  http = __webpack_require__("http"),
  fs = __webpack_require__("fs"),
  https = __webpack_require__("https"),
  httpProxy = __webpack_require__("http-proxy");

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
  if (Object({"NODE_ENV":"production","PORT":3000,"VERBOSE":false,"HOST":"localhost","RAZZLE_ASSETS_MANIFEST":"/Users/m874396/Desktop/budget-app/dist/assets.json","BUILD_TARGET":"server","PUBLIC_PATH":"/","RAZZLE_PUBLIC_DIR":"/Users/m874396/Desktop/budget-app/dist/public"}).RAZZLE_MOCK_SERVER_ENABLED === 'true') {
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
  var reqUrl = `${Object({"NODE_ENV":"production","PORT":3000,"VERBOSE":false,"HOST":"localhost","RAZZLE_ASSETS_MANIFEST":"/Users/m874396/Desktop/budget-app/dist/assets.json","BUILD_TARGET":"server","PUBLIC_PATH":"/","RAZZLE_PUBLIC_DIR":"/Users/m874396/Desktop/budget-app/dist/public"}).RAZZLE_MOCK_HOST}:${Object({"NODE_ENV":"production","PORT":3000,"VERBOSE":false,"HOST":"localhost","RAZZLE_ASSETS_MANIFEST":"/Users/m874396/Desktop/budget-app/dist/assets.json","BUILD_TARGET":"server","PUBLIC_PATH":"/","RAZZLE_PUBLIC_DIR":"/Users/m874396/Desktop/budget-app/dist/public"}).RAZZLE_MOCK_PORT}${requestPath}`;
  proxy.web(req, res, {target: reqUrl});
};
module.exports = {
  MockRouting,
  readMockFile,
  readMockServer
}
/* WEBPACK VAR INJECTION */}.call(exports, "mocks"))

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _http = __webpack_require__("http");

var _http2 = _interopRequireDefault(_http);

var _index = __webpack_require__("./src/server/index.jsx");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _http2.default.createServer(_index2.default);

var currentApp = _index2.default;

server.listen(3000 || 3000, function (error) {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  // eslint-disable-next-line no-console
  console.log('🚀 started!');
});

if (false) {
  // eslint-disable-next-line no-console
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server/index', function () {
    // eslint-disable-next-line no-console
    console.log('🔁  HMR Reloading `./server/index`...');
    server.removeListener('request', currentApp);
    var newApp = require('./server/index').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}

/***/ }),

/***/ "./src/server/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__("express");

var _express2 = _interopRequireDefault(_express);

var _reactRouterDom = __webpack_require__("react-router-dom");

var _server = __webpack_require__("react-dom/server");

var _reactRedux = __webpack_require__("react-redux");

var _server2 = __webpack_require__("@core/lib-react/server");

var _App = __webpack_require__("./src/shared/App.jsx");

var _App2 = _interopRequireDefault(_App);

var _configureStore = __webpack_require__("./src/shared/store/configureStore.js");

var _configureStore2 = _interopRequireDefault(_configureStore);

var _index = __webpack_require__("./mocks/index.js");

var _jss = __webpack_require__("react-jss/lib/jss");

var _JssProvider = __webpack_require__("react-jss/lib/JssProvider");

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _styles = __webpack_require__("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* assets manifest gets generated at build time */
// eslint-disable-next-line import/no-dynamic-require
var assets = __webpack_require__("./dist/assets.json");

// Material UI SSR


var context = {};
var MarsServer = new _express2.default();
MarsServer.disable('x-powered-by');

// ************************************
// *** Add your express routes here ***

// ************************************

// Serve API responses from mock service, if enabled
if (false) {
  MarsServer.use('/api/**', _index.MockRouting);
}

// Handle all UI routes through React-router for single-page application
var store = (0, _configureStore2.default)({ tabSelected: 0 });

MarsServer.get('/static/*', function (req, res) {
  var path = 'public/static/' + req.params[0];
  if (req.params[0].indexOf('.css') > 0) {
    res.type('text/css');
  } else {
    res.type('application/javascript');
  }
  res.sendFile(path, {
    root: './build'
  });
}).get('/*', function (req, res) {
  if (req.params[0].indexOf('.js') > 0) {
    var path = 'public/' + req.params[0];
    res.type('application/javascript');
    res.sendFile(path, {
      root: './build'
    });
  } else {
    var preloadedState = store.getState();
    // *** Assign inital page title for application here, can be updated client-side
    var htmlPageTitle = 'Mars Application';

    var sheetsRegistry = new _jss.SheetsRegistry();
    var generateClassName = (0, _styles.createGenerateClassName)();

    // The ESLint rules (react/jsx-indent) and (function-paren-newline) conflict with each other when JSX is used as a function param
    // (i.e. when using renderToString). The issue can be circumvented using double-parens, but double-parens are cleaned up via prettier
    // prettier-ignore
    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { context: context, location: req.url },
        _react2.default.createElement(
          _JssProvider2.default,
          { generateClassName: generateClassName, registry: sheetsRegistry },
          _react2.default.createElement(
            _styles.MuiThemeProvider,
            { theme: (0, _styles.createMuiTheme)(), sheetsManager: new Map() },
            _react2.default.createElement(_App2.default, null)
          )
        )
      )
    ));

    var css = sheetsRegistry.toString();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send((0, _server2.template)(htmlPageTitle, assets.client.css, assets.client.js, preloadedState, markup, css));
    }
  }
});

exports.default = MarsServer;

/***/ }),

/***/ "./src/shared/App.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Router = __webpack_require__("./src/shared/Router.jsx");

var _Router2 = _interopRequireDefault(_Router);

var _Header = __webpack_require__("./src/shared/components/Header/index.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Footer from './components/Footer';
// import './App.scss';

var App = function App() {
  return _react2.default.createElement(
    'div',
    { id: 'App' },
    _react2.default.createElement(_Router2.default, null),
    _react2.default.createElement(_Header2.default, null)
  );
};

exports.default = App;

/***/ }),

/***/ "./src/shared/Router.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Route = __webpack_require__("react-router-dom/Route");

var _Route2 = _interopRequireDefault(_Route);

var _Switch = __webpack_require__("react-router-dom/Switch");

var _Switch2 = _interopRequireDefault(_Switch);

var _views = __webpack_require__("@core/lib-react/views");

var _home = __webpack_require__("./src/shared/views/home/index.js");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
  return _react2.default.createElement(
    _Switch2.default,
    null,
    _react2.default.createElement(_Route2.default, { exact: true, path: '/', component: _home2.default }),
    _react2.default.createElement(_Route2.default, { path: '/*', component: _views.NotFound })
  );
};

exports.default = Main;

/***/ }),

/***/ "./src/shared/components/Header/Header.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-wrapper {\n  text-align: center;\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n  color: #333; }\n", ""]);

// exports


/***/ }),

/***/ "./src/shared/components/Header/HeaderContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__("react-redux");

var _HeaderPresentational = __webpack_require__("./src/shared/components/Header/HeaderPresentational.jsx");

var _HeaderPresentational2 = _interopRequireDefault(_HeaderPresentational);

var _actions = __webpack_require__("./src/shared/store/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        tabSelected: state.tabSelected
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        selectTab: function selectTab(value) {
            return dispatch((0, _actions.chooseTab)(value));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_HeaderPresentational2.default);

/***/ }),

/***/ "./src/shared/components/Header/HeaderPresentational.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _BottomNavigation = __webpack_require__("@material-ui/core/BottomNavigation");

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _BottomNavigationAction = __webpack_require__("@material-ui/core/BottomNavigationAction");

var _BottomNavigationAction2 = _interopRequireDefault(_BottomNavigationAction);

__webpack_require__("./src/shared/components/Header/Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {

  return _react2.default.createElement(
    'div',
    { className: 'Header_header-wrapper_3NJHx' },
    _react2.default.createElement(
      _BottomNavigation2.default,
      { showLabels: true, value: props.tabSelected },
      _react2.default.createElement(_BottomNavigationAction2.default, { onClick: function onClick() {
          return props.selectTab(0);
        }, label: 'Budget', style: { flexBasis: '50%', maxWidth: '50%' } }),
      _react2.default.createElement(_BottomNavigationAction2.default, { onClick: function onClick() {
          return props.selectTab(1);
        }, label: 'Spend', style: { flexBasis: '50%', maxWidth: '50%' } })
    )
  );
};
// import MenuIcon from '@material-ui/icons/Menu';

exports.default = Header;

/***/ }),

/***/ "./src/shared/components/Header/HeaderReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabSelected = tabSelected;
function tabSelected() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'MAIN_PAGE_TAB_SELECTED':
      return action.tabValue;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/shared/components/Header/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HeaderContainer = __webpack_require__("./src/shared/components/Header/HeaderContainer.js");

var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _HeaderContainer2.default;

/***/ }),

/***/ "./src/shared/components/NestedListView/NestedListView.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _ListSubheader = __webpack_require__("@material-ui/core/ListSubheader");

var _ListSubheader2 = _interopRequireDefault(_ListSubheader);

var _List = __webpack_require__("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__("@material-ui/core/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__("@material-ui/core/ListItemText");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Collapse = __webpack_require__("@material-ui/core/Collapse");

var _Collapse2 = _interopRequireDefault(_Collapse);

var _ExpandLess = __webpack_require__("@material-ui/icons/ExpandLess");

var _ExpandLess2 = _interopRequireDefault(_ExpandLess);

var _ExpandMore = __webpack_require__("@material-ui/icons/ExpandMore");

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NestedListView = function (_React$Component) {
  _inherits(NestedListView, _React$Component);

  function NestedListView() {
    _classCallCheck(this, NestedListView);

    var _this = _possibleConstructorReturn(this, (NestedListView.__proto__ || Object.getPrototypeOf(NestedListView)).call(this));

    _this.state = { open: false };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(NestedListView, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState(function (state) {
        return { open: !state.open };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.data;

      return _react2.default.createElement(
        'div',
        null,
        Object.keys(data).map(function (items) {
          var currentCategory = data[items];
          return _react2.default.createElement(
            _List2.default,
            {
              component: 'nav',
              subheader: _react2.default.createElement(
                _ListSubheader2.default,
                { component: 'div' },
                items
              )
            },
            currentCategory.map(function (budgetItems) {
              console.log(currentCategory);
              console.log(budgetItems);
              return _react2.default.createElement(
                _ListItem2.default,
                { button: true, onClick: _this2.handleClick },
                _react2.default.createElement(_ListItemText2.default, { inset: true, primary: 'Item: ' + budgetItems.item + ' Amount: ' + budgetItems.amount })
              );
              {/* <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button>
                <ListItemText inset primary="Starred" />
                </ListItem>
                </List>
                </Collapse> */}
            })
          );
        })
      );
    }
  }]);

  return NestedListView;
}(_react2.default.Component);

exports.default = NestedListView;

/***/ }),

/***/ "./src/shared/components/NestedListView/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NestedListView = __webpack_require__("./src/shared/components/NestedListView/NestedListView.jsx");

var _NestedListView2 = _interopRequireDefault(_NestedListView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _NestedListView2.default;

/***/ }),

/***/ "./src/shared/store/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// Add all redux actions here

var chooseTab = exports.chooseTab = function chooseTab(tabValue) {
    return {
        type: 'MAIN_PAGE_TAB_SELECTED',
        tabValue: tabValue
    };
};

/***/ }),

/***/ "./src/shared/store/configureStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__("redux");

var _server = __webpack_require__("@core/lib-react/server");

var _rootReducer = __webpack_require__("./src/shared/store/rootReducer.js");

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (preloadedState) {
  var store = (0, _redux.createStore)(_rootReducer2.default, preloadedState, (0, _server.getMiddleware)());

  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', function () {
      store.replaceReducer(_rootReducer2.default);
    });
  }

  return store;
};

/***/ }),

/***/ "./src/shared/store/rootReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__("redux");

var _HeaderReducer = __webpack_require__("./src/shared/components/Header/HeaderReducer.js");

exports.default = (0, _redux.combineReducers)({
  // list all imported reducers here
  tabSelected: _HeaderReducer.tabSelected
});
// import reducers from pages here

/***/ }),

/***/ "./src/shared/views/BudgetView/BudgetViewPresentational.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Add = __webpack_require__("@material-ui/icons/Add");

var _Add2 = _interopRequireDefault(_Add);

var _Modal = __webpack_require__("@material-ui/core/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _Card = __webpack_require__("@material-ui/core/Card");

var _Card2 = _interopRequireDefault(_Card);

var _TextField = __webpack_require__("@material-ui/core/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

var _MenuItem = __webpack_require__("@material-ui/core/MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _NestedListView = __webpack_require__("./src/shared/components/NestedListView/index.js");

var _NestedListView2 = _interopRequireDefault(_NestedListView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BudgetView = function (_React$Component) {
  _inherits(BudgetView, _React$Component);

  function BudgetView(props) {
    _classCallCheck(this, BudgetView);

    var _this = _possibleConstructorReturn(this, (BudgetView.__proto__ || Object.getPrototypeOf(BudgetView)).call(this, props));

    _this.state = {
      rows: {},
      open: false,
      selectedCategory: '',
      inputtedItem: ''
    };
    _this.addToBudget = _this.addToBudget.bind(_this);
    // this.handleChange = this.handleChange.bind(this);
    return _this;
  }

  _createClass(BudgetView, [{
    key: 'addToBudget',
    value: function addToBudget(category, item, amount) {
      var thing = { item: item, amount: amount };
      var rows = this.state.rows;

      if (!rows[category]) {
        rows = Object.assign(_defineProperty({}, category, []), rows);
      }
      console.log(rows);
      rows[category].push(thing);
      localStorage.setItem('rows', JSON.stringify(rows));
      this.setState({ rows: rows });
    }

    // handleChange(name){
    //   event => {
    //     this.setState({
    //       [name]: event.target.value
    //     })
    //   }
    // }

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ rows: JSON.parse(localStorage.getItem('rows')) || [] });
      if (typeof window !== 'undefined') {

        //   var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

        //   // Open (or create) the database
        //   var open = indexedDB.open("MyDatabase", 1);

        //   // Create the schema
        //   open.onupgradeneeded = function() {
        //     var db = open.result;
        //     var store = db.createObjectStore("MyAppStore", {keyPath: "id"});
        //   };

        //   open.onsuccess = function() {
        //     // Start a new transaction
        //     var db = open.result;
        //     var tx = db.transaction("MyAppStore", "readwrite");
        //     var store = tx.objectStore("MyAppStore");
        //     // var index = store.index("BudgetIndex");

        //     // Add some data
        //     store.put({id: 1, budget: {category: "Groceries", title: "Apples",limit: 20}});
        //     store.put({id: 2, budget: {category: "Groceries", title: "Chicken",limit: 40}});
        //     // Close the db when the transaction is done

        //     var getCategory = store.getAll();
        //     getCategory.onsuccess = () =>{
        //       getCategory.result.forEach(element => {
        //         console.log(element)
        //         rows.push(
        //           <div>
        //             {"Item: " + element.budget.title + " Budget: " + element.budget.limit } 
        //           </div>)
        //       });
        //       that.setState({rows})
        //     }
        //     tx.oncomplete = function() {
        //       db.close();
        //     };
        //   }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.state);
      return _react2.default.createElement(
        'div',
        null,
        'BudgetView',
        _react2.default.createElement(_NestedListView2.default, { data: this.state.rows }),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick() {
              return _this2.setState({ open: true });
            }, variant: 'fab', color: 'primary', 'aria-label': 'Add' },
          _react2.default.createElement(_Add2.default, null)
        ),
        _react2.default.createElement(
          _Modal2.default,
          {
            'aria-labelledby': 'simple-modal-title',
            'aria-describedby': 'simple-modal-description',
            open: this.state.open,
            onClose: function onClose() {
              _this2.setState({ open: false });
            }
          },
          _react2.default.createElement(
            'div',
            { style: {
                position: 'absolute',
                top: '50%',
                left: '50%'
              } },
            _react2.default.createElement(
              _Card2.default,
              { style: { backgroundColor: '#E0E0E0' } },
              _react2.default.createElement(
                'div',
                { style: { margin: '.125em' } },
                _react2.default.createElement(
                  _TextField2.default,
                  {
                    id: 'select-category',
                    select: true,
                    label: 'Category',
                    style: {
                      marginLeft: 4,
                      marginRight: 4,
                      width: 200
                    },
                    value: this.state.selectedCategory,
                    onChange: function onChange(e) {
                      _this2.setState({ selectedCategory: e.target.value });
                    },
                    SelectProps: {
                      MenuProps: {
                        style: { width: 200 }
                      }
                    },
                    helperText: 'Please select a category',
                    margin: 'normal'
                  },
                  [{ label: 'Groceries', value: 'Groceries' }, { label: 'Miscelaneous', value: 'Miscelaneous' }].map(function (option) {
                    return _react2.default.createElement(
                      _MenuItem2.default,
                      { key: option.value, value: option.value },
                      option.label
                    );
                  })
                ),
                _react2.default.createElement(_TextField2.default, {
                  id: 'item',
                  label: 'Item',
                  value: this.state.inputtedItem,
                  onChange: function onChange(e) {
                    return _this2.setState({ inputtedItem: e.target.value });
                  },
                  type: 'string',

                  InputLabelProps: {
                    shrink: true
                  }
                }),
                _react2.default.createElement(_TextField2.default, {
                  id: 'number',
                  label: 'Budgeted Amount',
                  value: this.state.amount,
                  onChange: function onChange(e) {
                    return _this2.setState({ amount: e.target.value });
                  },
                  type: 'number',

                  InputLabelProps: {
                    shrink: true
                  }
                }),
                _react2.default.createElement(
                  _Button2.default,
                  { variant: 'contained', onClick: function onClick() {
                      return _this2.addToBudget(_this2.state.selectedCategory, _this2.state.inputtedItem, _this2.state.amount);
                    }, fullWidth: true, color: 'primary' },
                  'Done'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return BudgetView;
}(_react2.default.Component);

exports.default = BudgetView;

/***/ }),

/***/ "./src/shared/views/BudgetView/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BudgetViewPresentational = __webpack_require__("./src/shared/views/BudgetView/BudgetViewPresentational.js");

var _BudgetViewPresentational2 = _interopRequireDefault(_BudgetViewPresentational);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BudgetViewPresentational2.default;

/***/ }),

/***/ "./src/shared/views/SpendView/SpendViewPresentational.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpendView = undefined;

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpendView = exports.SpendView = function SpendView(props) {

  return _react2.default.createElement(
    'div',
    null,
    'SpendView'
  );
};

/***/ }),

/***/ "./src/shared/views/SpendView/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpendViewPresentational = __webpack_require__("./src/shared/views/SpendView/SpendViewPresentational.js");

exports.default = _SpendViewPresentational.SpendView;

/***/ }),

/***/ "./src/shared/views/home/HomeContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__("react-redux");

var _HomePresentational = __webpack_require__("./src/shared/views/home/HomePresentational.jsx");

var _HomePresentational2 = _interopRequireDefault(_HomePresentational);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        tabSelected: state.tabSelected
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(_HomePresentational2.default);

/***/ }),

/***/ "./src/shared/views/home/HomePresentational.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./src/shared/views/home/home.scss");

var _BudgetView = __webpack_require__("./src/shared/views/BudgetView/index.js");

var _BudgetView2 = _interopRequireDefault(_BudgetView);

var _SpendView = __webpack_require__("./src/shared/views/SpendView/index.js");

var _SpendView2 = _interopRequireDefault(_SpendView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
  return _react2.default.createElement(
    'div',
    { id: 'home-wrapper' },
    props.tabSelected === 0 ? _react2.default.createElement(_BudgetView2.default, null) : _react2.default.createElement(_SpendView2.default, null)
  );
};

exports.default = Home;

/***/ }),

/***/ "./src/shared/views/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".instruction {\n  color: #333333;\n  text-align: center;\n  margin: 40px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/shared/views/home/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeContainer = __webpack_require__("./src/shared/views/home/HomeContainer.js");

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _HomeContainer2.default;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.js");


/***/ }),

/***/ "@core/lib-react/server":
/***/ (function(module, exports) {

module.exports = require("@core/lib-react/server");

/***/ }),

/***/ "@core/lib-react/views":
/***/ (function(module, exports) {

module.exports = require("@core/lib-react/views");

/***/ }),

/***/ "@material-ui/core/BottomNavigation":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigation");

/***/ }),

/***/ "@material-ui/core/BottomNavigationAction":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigationAction");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/Collapse":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Modal":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Modal");

/***/ }),

/***/ "@material-ui/core/TextField":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "http-proxy":
/***/ (function(module, exports) {

module.exports = require("http-proxy");

/***/ }),

/***/ "https":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "react-jss/lib/jss":
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/jss");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/Route":
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Route");

/***/ }),

/***/ "react-router-dom/Switch":
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Switch");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "url":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map