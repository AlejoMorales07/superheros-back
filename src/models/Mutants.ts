import { DataTypes } from 'sequelize'
import { IMutants } from '../interfaces/mutants.interface'
import sequelize from '../utils/database'

const Mutants = sequelize.define<IMutants>('Mutants', {
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

//Mutants.

export default Mutants
//Mutants.has
