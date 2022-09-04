import app from './app'
import { port } from './config'
import sequelize from './utils/database'
import './models/Mutants.ts'
import './models/SuperPowers.ts'
import './models/Vehicles.ts'

async function main() {
  try {
    await sequelize.sync({ force: false, alter: true }).then(() => console.log('Database synced'))
    app.listen(port)
    console.log(`Server on port ${port}`)
  } catch (error) {
    console.log(error)
  }
}

main()
