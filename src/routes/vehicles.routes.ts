import { Router } from 'express'
import { createVehicle, deleteVehicle, getVehicles, updateVehicle } from '../controllers/vehicles.controller'

const router = Router()

router.get('/vehicles', getVehicles)
router.post('/vehicles', createVehicle)
router.put('/vehicles/:id', updateVehicle)
router.delete('/vehicles/:id', deleteVehicle)

export default router
