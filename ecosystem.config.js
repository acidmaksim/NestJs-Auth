module.exports = {
  apps: [
    {
      name: 'nest-app',
      script: 'dist/main.js',
      watch: true,
      instances: 'max',
      exec_mode: 'cluster',

      env: {
        NODE_ENV: 'development',
      },

      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
