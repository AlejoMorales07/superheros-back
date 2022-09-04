import { Router } from 'express'

const router = Router()

router.get('/mutants')
router.post('/mutants')
router.put('/mutants/:id')
router.delete('/mutants/:id')

export default router
