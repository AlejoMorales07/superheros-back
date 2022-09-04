import { DataTypes } from 'sequelize'
import { IMutants } from '../interfaces/mutants.interface'
import sequelize from '../utils/database'
import { SuperPowers } from './SuperPowers'
import { Vehicles } from './Vehicles'

export const Mutants = sequelize.define<IMutants>('Mutants', {
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
  group: {
    type: DataTypes.STRING,
    allowNull: false
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Vehicles.hasMany(Mutants)
SuperPowers.belongsToMany(Mutants, { through: 'MutantsSuperPowers', onDelete: 'CASCADE' })
Mutants.belongsTo(Vehicles, { onDelete: 'CASCADE' })
Mutants.belongsToMany(SuperPowers, { through: 'MutantsSuperPowers', onDelete: 'CASCADE' })
