// ------------------------- Packages ------------------------------

import { IsString, IsMongoId, IsJWT } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

// ------------------------  ---------------------------------------

export class TournamentsResponseDto {
	@ApiProperty()
	@IsString()
	@IsJWT()
	username: string

	@ApiProperty()
	@IsString()
	@IsMongoId()
	id: string
}