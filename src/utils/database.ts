import { Sequelize } from 'sequelize'
import { database, password, user, host } from '../config'

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'postgres'
})

export default sequelize
