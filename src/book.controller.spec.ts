import { Test, TestingModule } from '@nestjs/testing'

import { BookService } from './book.service'
import { BookController } from './book.controller'

describe(
	'AppController',
	() => {
		let bookController: BookController

		beforeEach(async () => {
			const app: TestingModule = await Test.createTestingModule({
				providers: [BookService],
				controllers: [BookController]
			}).compile()

			bookController = app.get<BookController>(BookController)
		})

		describe(
			'root',
			() => {
				it(
					'should return "Hello World!"',
					() => {
						expect(bookController.getHello()).toBe('Hello World!')
					}
				)
			}
		)
	}
)
