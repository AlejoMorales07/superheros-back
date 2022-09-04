import { Model } from 'sequelize'
export interface IVehicles extends Model {
  id?: string
  name: string
  type: string
}
