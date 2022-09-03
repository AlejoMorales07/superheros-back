import { config } from 'dotenv'

config()

export const database = process.env.DATABASE_NAME || ''
export const user = process.env.DATABASE_USER || ''
export const password = process.env.DATABASE_PASSWORD || ''
export const host = process.env.DATABASE_HOST || ''
export const port = process.env.PORT || ''
