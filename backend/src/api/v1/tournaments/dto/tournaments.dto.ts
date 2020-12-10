// ------------------------- Packages ------------------------------

import { IsIn, IsOptional, IsString } from 'class-validator'
import { EnumStatus } from '../tournaments.service'

// ------------------------  ---------------------------------------

export class TournamentsDto {
	// for reference to fetch info.
	@IsString()
	username: string

	// by api
	@IsString()
	tournament_id: string

	@IsString()
	title: string

	@IsString()
	image: string

	@IsString()
	description?: string

	@IsString()
	@IsOptional()
	@IsIn([EnumStatus])
	status?: string
}
