export default {
  jwt: {
    secret: 'secretprod'
  },
  db: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mariadb',
    operatorsAliases: false
  },
  hash: {
    saltRounds: 10
  }
}
