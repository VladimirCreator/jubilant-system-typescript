import {
	Injectable,
	Inject
} from '@nestjs/common'

import { Book } from './model/book.model'

import { CreateBookDto, UpdateBookDto } from './dto'

@Injectable()
export class BookService {
	constructor(
		@Inject('BOOK_REPOSITORY')
		private readonly booksRepository: typeof Book
	) {

	}

	async findAll() {
		return this.booksRepository.findAll()
	}

	async findById(id: string) {
		return await this.booksRepository.findAll(
			{
				where: {
					id: id
				}
			}
		)
	}

	async create(createBookDto: CreateBookDto) {
		return await this.booksRepository.create({ ...createBookDto })
	}

	async deleteById(id: string) {
		return await this.booksRepository.destroy(
			{
				where: {
					id: id
				}
			}
		)
	}

	async update(id: string, updateBookDto: UpdateBookDto) {
		return await this.booksRepository.update(
			{ ...updateBookDto },
			{
				where: {
					id: id
				}
			}
		)
	}
}
