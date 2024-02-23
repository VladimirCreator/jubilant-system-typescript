import { Module } from '@nestjs/common'

import { DatabaseModule } from './database/database.module'

import { BookService } from './book.service'
import { BookController } from './book.controller'
import { providers as bookProviders } from './book.providers'

@Module({
	imports: [
		DatabaseModule
	],
	providers: [
		BookService,
		...bookProviders
	],
	controllers: [
		BookController
	],
})
export class BookModule {}
