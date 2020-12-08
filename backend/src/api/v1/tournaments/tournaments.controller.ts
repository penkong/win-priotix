// ------------------------- Packages ------------------------------

import {
	Body,
	Controller,
	Delete,
	Get,
	Logger,
	Param,
	Post,
	Req,
	ValidationPipe
} from '@nestjs/common'

// ------------------------ Local ----------------------------------

import { TournamentsService } from './tournaments.service'
import { TournamentsDto, TournamentsResponseDto } from './dto'

// -----------------------------------------------------------------

@Controller('/api/v1/tournaments')
export class TournamentsController {
	// -------------------- Logger --------------------------

	private logger = new Logger(TournamentsController.name)

	// -------------------- Ctor --------------------------

	constructor(private tournamentsService: TournamentsService) {}

	// -------- consume service functionality -------------

	@Get('/test')
	public test(): { [key: string]: boolean } {
		return this.tournamentsService.test()
	}

	// ---

	@Post('/')
	public async addTournaments(
		@Body(ValidationPipe) tournamentsDTO: TournamentsDto
	): Promise<TournamentsDto> {
		return await this.tournamentsService.addTournoments(tournamentsDTO)
	}

	// ---

	@Delete('/:username/:id')
	public async removeTournament(
		@Param('id') id: string,
		@Param('username') username: string
	): Promise<TournamentsDto> {
		return await this.tournamentsService.removeTournament(id, username)
	}

	// ---

	@Get('/:username')
	public async getAll(
		@Param('username') username: string
	): Promise<TournamentsDto[]> {
		return this.tournamentsService.getAll(username)
	}

	// ---

	@Get('/:username/:id')
	public async getOne(
		@Param('id') id: string,
		@Param('username') username: string
	): Promise<TournamentsDto> {
		return await this.tournamentsService.getOne(id, username)
	}
}

// -----------------------------------------------------
