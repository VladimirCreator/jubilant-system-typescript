import {
	Table, Column, DataType,
	Model,
	Default, PrimaryKey,
} from 'sequelize-typescript'

@Table
export class Book extends Model {
	@Default(DataType.UUIDV4)
	@PrimaryKey
	@Column(DataType.UUID)
	id: unknown

	@Column
	title: string
	@Column
	author: string
	@Column
	yearOfPublication: number
}
