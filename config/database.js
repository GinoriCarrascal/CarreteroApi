const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false)
        ? { rejectUnauthorized: false }
        : false,
    },
  },
});
