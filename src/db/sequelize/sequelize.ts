import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize'
import config from '../../config'

const dbConfig: any = config.db

export const sequelize: Sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    define: {
      timestamps: false,
    },
    timezone: '+09:00',
    pool: {
      max: 30,
      min: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
)
