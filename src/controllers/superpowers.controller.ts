import { Request, Response } from 'express'
import { SuperPowers } from '../models/SuperPowers'

export const getSuperPowers = async (req: Request, res: Response) => {
  try {
    const values = await SuperPowers.findAll()
    res.status(200).json(values)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createSuperPower = async (req: Request, res: Response<{ ok: boolean; message: string }>) => {
  try {
    const { name, type } = req.body
    await SuperPowers.create({ name, type })
    res.status(200).send({ ok: true, message: 'Super poder creado' })
  } catch (error: any) {
    res.status(500).send({ ok: false, message: error.message })
  }
}

export const updateSuperPower = async (req: Request, res: Response<{ ok: boolean; message: string }>) => {
  try {
    const { id } = req.params
    const { name, type } = req.body
    const data = await SuperPowers.update({ name, type }, { where: { id } })
    if (data[0] !== 0) {
      res.status(200).json({ ok: true, message: 'Super poder eliminado' })
    } else {
      res.status(400).json({ ok: false, message: 'Super poder no encontrado' })
    }
  } catch (error: any) {
    res.status(500).json({ ok: false, message: error.message })
  }
}

export const deleteSuperPower = async (req: Request, res: Response<{ ok: boolean; message: string }>) => {
  try {
    const { id } = req.params
    const data = await SuperPowers.destroy({
      where: {
        id
      }
    })
    if (data !== 0) {
      res.status(200).json({ ok: true, message: 'Super poder eliminado' })
    } else {
      res.status(404).json({ ok: false, message: 'Super poder no encontrado' })
    }
  } catch (error: any) {
    res.status(500).json({ ok: false, message: error.message })
  }
}
