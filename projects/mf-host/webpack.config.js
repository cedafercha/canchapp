const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    //"mfUser": "http://localhost:4201/remoteEntry.js",
    mfDashBoard: "http://localhost:4202/remoteEntry.js",
    mfCompany: "http://localhost:4203/remoteEntry.js",
    mfCatalog: "http://localhost:4204/remoteEntry.js",
    mfBooking: "http://localhost:4205/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }

});
