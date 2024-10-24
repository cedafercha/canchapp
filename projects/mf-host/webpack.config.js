const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    //"mfUser": "http://localhost:4201/remoteEntry.js",
    mfDashBoard: "http://localhost:4202/remoteEntry.js",
    mfCompany: "http://localhost:4203/remoteEntry.js",
    mfCourt: "http://localhost:4204/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  exposes: {
    './SharedModule': './src/app/shared/shared.module.ts', // Exponiendo el módulo
  },

});
