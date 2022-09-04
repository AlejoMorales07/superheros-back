import { DataTypes } from 'sequelize'
import { IVehicles } from '../interfaces/vehicles.interface'
import sequelize from '../utils/database'

export const Vehicles = sequelize.define<IVehicles>('Vehicles', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
