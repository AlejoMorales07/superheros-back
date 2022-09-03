import app from './app'
import sequelize from './utils/database'
import { port, database } from './config'

async function main() {
  try {
    await sequelize.authenticate()
    app.listen(port)
    console.log(`Server on port ${port}`)
  } catch (error) {
    console.log(error)
  }
}

main()
