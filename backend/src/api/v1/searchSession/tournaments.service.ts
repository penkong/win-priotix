// ------------------------ Packages -------------------------------

import { Inject, Injectable, Logger } from '@nestjs/common'
import { Model } from 'mongoose'
import { ConfigService } from '@nestjs/config/dist/config.service'

// ------------------------ Local ----------------------------------

import { TournamentsDto, TournamentsResponseDto } from './dto'
import { TOURNAMENT_MODEL } from '../../../constants'
import { ITournamentsDoc } from './models'

// -----------------------------------------------------------------

@Injectable()
export class TournamentsService {
	// -------------------- Logger --------------------------

	private logger = new Logger(TournamentsService.name)

	// -------------------- Ctor ----------------------------

	constructor(
		@Inject(TOURNAMENT_MODEL)
		private tournamentModel: Model<ITournamentsDoc>,
		private configService: ConfigService
	) {}

	// -------------------- Functionality -------------------

	public test() {
		return { test: true }
	}

	// ---

	// remove any
	public async getAll(
		tournamentDto: TournamentsDto
	): Promise<TournamentsResponseDto | any> {
		return { sign: 'signup' }
	}

	// ---

	// remove any
	public async getOne(
		tournamentDto: TournamentsDto
	): Promise<TournamentsResponseDto | any> {
		return { sign: 'signin' }
	}
}

// -----------------------------------------------------
