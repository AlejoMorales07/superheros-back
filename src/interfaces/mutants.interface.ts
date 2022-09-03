import { Model } from 'sequelize'
import { ISuperPowers } from './superpower.interface'
import { IVehicles } from './vehicles.interface'

export interface IMutants extends Model {
  id: string
  name: string
  group: string
  condition: string
  city: string
  superpowers: ISuperPowers[] | string[]
  vehicle: IVehicles | string
}
