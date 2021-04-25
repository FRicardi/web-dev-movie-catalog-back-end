require('ts-node/register');

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations'
    },
    useNullAsDefault: true
  },
  use: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dev.sqlite3'
    },
  }
};

export default config;

module.exports=config;