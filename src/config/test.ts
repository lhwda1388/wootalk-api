export default {
  jwt: {
    secret: 'secrettest'
  },
  db: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mariadb',
    operatorsAliases: false
  },
  hash: {
    saltRounds: 10
  }
}
