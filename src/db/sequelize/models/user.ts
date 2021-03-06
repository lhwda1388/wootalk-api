import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

export class User extends Model {
  public id!: string
  public email!: string
  public pwd!: string
  public name!: string
}

User.init(
  {
    id: {
      type: DataTypes.STRING(20),
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(200),
      primaryKey: true
    },
    pwd: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  },
  {
    tableName: 'user',
    sequelize: sequelize
  }
)
