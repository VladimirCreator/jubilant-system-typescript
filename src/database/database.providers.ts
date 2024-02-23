import { Sequelize } from 'sequelize-typescript'
import type { Dialect } from 'sequelize'

import { Book } from '../model/book.model'

export const providers = [
	{
		provide: 'SEQUELIZE',
		useFactory: async() => {
			const username = process.env.DB_USERNAME as unknown as string
			const password = process.env.DB_PASSWORD as unknown as string
			const host = process.env.DB_HOST as unknown as string
			const port = process.env.DB_PORT as unknown as number
			const database = process.env.DB_NAME as unknown as string
			const dialect = process.env.DB_DIALECT as unknown as Dialect

			const sequelize = new Sequelize(database, username, password, {
				host, port, dialect
			})
			sequelize.addModels([Book])

			await sequelize.sync()
			return sequelize
		}
	}
]
