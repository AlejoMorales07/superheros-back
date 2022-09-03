import { DataTypes } from 'sequelize'
import { IVehicles } from '../interfaces/vehicles.interface'
import sequelize from '../utils/database'

const Vehicles = sequelize.define<IVehicles>('SuperPowers', {
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

export default Vehicles
