import sequelize from '../utils/database'
import { DataTypes } from 'sequelize'
import { ISuperPowers } from '../interfaces/superpower.interface'

export const SuperPowers = sequelize.define<ISuperPowers>('SuperPowers', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
