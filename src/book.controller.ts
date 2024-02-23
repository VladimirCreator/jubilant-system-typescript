import {
	Controller,
	Get, Post, Delete, Put,
	Param, Body
} from '@nestjs/common'

import { BookService } from './book.service'
import { CreateBookDto, UpdateBookDto } from './dto'

@Controller('books')
export class BookController {
	constructor(private readonly bookService: BookService) {

	}

	@Get()
	async findAll() {
		return await this.bookService.findAll()
	}

	@Get(':id')
	async findById(@Param('id') id: string) {
		return await this.bookService.findById(id)
	}

	@Post()
	async create(@Body() createBookDto: CreateBookDto) {
		return await this.bookService.create(createBookDto)
	}

	@Delete(':id')
	async deleteById(@Param('id') id: string) {
		return await this.bookService.deleteById(id)
	}

	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() updateBookDto: UpdateBookDto
	) {
		return await this.bookService.update(id, updateBookDto)
	}
}
