// TODO: move this into template-core
const WebpackPwaManifest = require('webpack-pwa-manifest');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  modify: (baseConfig, { target, dev }, webpack) => {
    const appConfig = Object.assign({}, baseConfig);
    const isServer = target !== 'web';

    const postCssLoader = {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
          autoprefixer({
            browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
          }),
        ],
      },
    };

    // Handle scss imports on the server
    let scssLoaderByEnv = [];
    if (isServer) scssLoaderByEnv = ['css-loader', 'sass-loader'];
    else if (dev) {
      scssLoaderByEnv = [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:5]', // Development naming scheme
          },
        },
        postCssLoader,
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ];
    } else {
      // For production, extract CSS
      scssLoaderByEnv = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]', // Naming scheme for production, option to obsfuricate?
  
            },
          },
          postCssLoader,
          'sass-loader',
        ],
      });
    }
    appConfig.module.rules.push({
      test: /.scss$/,
      use: scssLoaderByEnv,
    });

    if (!isServer && !dev) {
      appConfig.plugins.push(new ExtractTextPlugin('static/css/[name].[contenthash:8].css'));
      if (process.env.NODE_ENV === 'test') {
        appConfig.devtool = false;
      } else if (process.env.NODE_ENV === 'production') {
        appConfig.devtool = 'source-map';
      } else {
        appConfig.devtool = 'cheap-eval-source-map';
      }

      if (pkg.config.pwa) {
        appConfig.plugins.push(new WebpackPwaManifest({
          name: "Macy's reactive platform",
          short_name: 'MacysApp',
          description: "Macy's reactive platform",
          background_color: '#375360',
          start_url: '/',
          display: 'standalone',
          theme_color: '#cc0000',
          icons: [
            {
              src: 'src/shared/assets/mars_logo_1.png',
              sizes: [96, 128, 192, 256, 384, 512, 640], // multiple sizes
            },
            {
              src: 'src/shared/assets/mars_logo_1.png',
              size: '1024x1024', // you can also use the specifications pattern
            },
          ],
          options: {
            fingerprints: false,
          },
        }));
      }
    }

    // assumes babel-loader is in position 1 of rules array
    appConfig.module.rules[1].include.push(/\/node_modules\/@core\/.*jsx?$/);

    if (pkg.config.deployTo === 'heroku' && target === 'node') {
      const isDefinePlugin = plugin => plugin.constructor.name === 'DefinePlugin';
      const indexDefinePlugin = appConfig.plugins.findIndex(isDefinePlugin);

      const { definitions } = appConfig.plugins[indexDefinePlugin];
      const newDefs = {};
      Object.entries(definitions['process.env']).forEach(([key, val]) => {
        newDefs[`process.env.${key}`] = val;
      });
      delete newDefs['process.env.PORT'];
      appConfig.plugins[indexDefinePlugin] = new webpack.DefinePlugin(newDefs);
    }

    return appConfig;
  },
};
