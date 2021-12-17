module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'pobl-tv.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'poblstrapicms'),
      user: env('DATABASE_USERNAME', 'mysqlAdmin@pobl-tv'),
      password: env('DATABASE_PASSWORD', 'BCrvh3B{9A~!>-8A'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
