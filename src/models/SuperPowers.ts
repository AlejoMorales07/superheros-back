import sequelize from '../utils/database'
import { DataTypes } from 'sequelize'
import { ISuperPowers } from '../interfaces/superpower.interface'
import Mutants from './Mutants'

const SuperPowers = sequelize.define<ISuperPowers>('SuperPowers', {
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

SuperPowers.belongsToMany(Mutants, { through: 'MutantsSuperPowers', onDelete: 'CASCADE' })

export default SuperPowers
