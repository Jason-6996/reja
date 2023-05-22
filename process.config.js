module.exports = {
  apps: [
    {
      name: "complex-app",
      cwd: "./",
      script: "./server.js",
      watch: false,
      // env_production: {
      //   NODE_ENVY: "PRODUCTION",
      // },
      // env_development: {
      //   NODE_ENVY: "DEVELOPMENT",
      // },
      instances: 1,
      exec_mode: "cluster",

    },
  ],
};