import { Module } from '@nestjs/common'
import { providers as databaseProviders } from './database.providers'

@Module(
	{
		providers: [
			...databaseProviders
		],
		exports: [
			...databaseProviders
		]
	}
)
export class DatabaseModule {

}
