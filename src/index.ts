import app from './app'
import { port } from './config'
import sequelize from './utils/database'

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
