require('ts-node/register');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  }, 
  useNullAsDefault: true,
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations'
  },
  timezone: 'UTC'
}
