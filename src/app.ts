import express from 'express'
import MutantsRoutes from './routes/mutants.routes'
import VehiclesRoutes from './routes/vehicles.routes'
import SuperPowersRoutes from './routes/superpowers.routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use(MutantsRoutes)
app.use(VehiclesRoutes)
app.use(SuperPowersRoutes)

export default app
