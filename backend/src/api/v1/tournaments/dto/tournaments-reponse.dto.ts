// ------------------------- Packages ------------------------------

import { IsString, IsMongoId } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

// -----------------------------------------------------------------

export class TournamentsResponseDto {
	@ApiProperty()
	@IsString()
	username: string

	@ApiProperty()
	@IsString()
	id: string
}
