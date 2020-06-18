export default {
  jwt: {
    secret: 'secretdev'
  },
  db: {
    username: 'wootalk-api',
    password: 'qwer123!',
    database: 'wootalk',
    host: 'localhost',
    dialect: 'mariadb',
    operatorsAliases: false
  },
  hash: {
    saltRounds: 10
  }
}
