import { Router } from 'express'
import { createSuperPower, deleteSuperPower, getSuperPowers, updateSuperPower } from '../controllers/superpowers.controller'

const router = Router()

router.get('/superpowers', getSuperPowers)
router.post('/superpowers', createSuperPower)
router.put('/superpowers/:id', updateSuperPower)
router.delete('/superpowers/:id', deleteSuperPower)

export default router
