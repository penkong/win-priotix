// ------------------------- Packages ------------------------------

import { IsMobilePhone, IsString, Max } from 'class-validator'

// ------------------------  ---------------------------------------

export class TournamentsDto {
	@IsString()
	@IsMobilePhone()
	phone: string

	username: string
	tournoment_id: string
	title: string
	description: string

	@IsString()
	@Max(4)
	password: string
}
