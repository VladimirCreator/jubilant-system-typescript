import { Book } from './model/book.model'

export const providers = [
	{
		provide: 'BOOK_REPOSITORY',
		useValue: Book
	}
]
