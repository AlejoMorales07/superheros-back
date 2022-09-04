import { Request, Response } from 'express'

import { IVehicles } from '../interfaces/vehicles.interface'
import { Vehicles } from '../models/Vehicles'

export const getVehicles = async (req: Request, res: Response) => {
  try {
    const values = await Vehicles.findAll()
    res.status(200).json(values)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createVehicle = async (req: Request, res: Response<{ ok: boolean; message: string }>) => {
  try {
    const { name, type } = req.body as IVehicles
    await Vehicles.create({ name, type })
    res.status(200).send({ ok: true, message: 'Vehículo creado' })
  } catch (error: any) {
    res.status(500).send({ ok: false, message: error.message })
  }
}

export const updateVehicle = async (req: Request, res: Response<{ ok: boolean; message: string }>) => {
  try {
    const { id } = req.params
    const { name, type } = req.body
    const data = await Vehicles.update({ name, type }, { where: { id } })
    if (data[0] !== 0) {
      res.status(200).json({ ok: true, message: 'Vehículo eliminado' })
    } else {
      res.status(400).json({ ok: false, message: 'Vehículo no encontrado' })
    }
  } catch (error: any) {
    res.status(500).json({ ok: false, message: error.message })
  }
}

export const deleteVehicle = async (req: Request, res: Response<{ ok: boolean; message: string }>) => {
  try {
    const { id } = req.params
    const data = await Vehicles.destroy({
      where: {
        id
      }
    })
    if (data !== 0) {
      res.status(200).json({ ok: true, message: 'Vehículo eliminado' })
    } else {
      res.status(404).json({ ok: false, message: 'Vehículo no encontrado' })
    }
  } catch (error: any) {
    res.status(500).json({ ok: false, message: error.message })
  }
}
