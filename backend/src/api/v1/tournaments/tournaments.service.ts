// ------------------------ Packages -------------------------------

import {
	HttpException,
	HttpStatus,
	Inject,
	Injectable,
	Logger,
	NotFoundException
} from '@nestjs/common'
import { Model } from 'mongoose'
import { ConfigService } from '@nestjs/config/dist/config.service'

// ------------------------ Local ----------------------------------

import { TournamentsDto } from './dto'
import { TOURNAMENT_MODEL } from '../../../constants'
import { ITournamentsDoc } from './models'

// -----------------------------------------------------------------

export enum EnumStatus {
	INTERESTED = 'INTERESTED',
	REMOVED = 'REMOVED'
}

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

	public test(): { [key: string]: boolean } {
		return { test: true }
	}

	// ---

	public async addTournoments(
		tournamentsDTO: TournamentsDto
	): Promise<TournamentsDto> {
		const { username } = tournamentsDTO

		// check length
		const lengthOfTournaments = (
			await this.tournamentModel.find({
				username,
				status: EnumStatus.INTERESTED
			})
		).length

		// if already have 5 throw error == i put this lawve
		if (lengthOfTournaments >= 5)
			throw new HttpException(
				{
					status: HttpStatus.FORBIDDEN,
					error: 'You already reached max interest'
				},
				HttpStatus.FORBIDDEN
			)

		// make new one
		const newTournament = new this.tournamentModel(tournamentsDTO)

		// set status
		newTournament.status = EnumStatus.INTERESTED

		// save to db
		await newTournament.save()

		// return for confirmation
		return newTournament
	}

	// ---

	public async removeTournament(
		id: string,
		username: string
	): Promise<TournamentsDto> {
		// find for remove
		const considerRemoved = await this.tournamentModel.findOne({
			_id: id,
			username
		})

		// if not find item
		if (!considerRemoved) throw new NotFoundException()

		// like removed
		considerRemoved.status = EnumStatus.REMOVED

		// save to db
		await considerRemoved.save()

		// return success object
		return considerRemoved
	}

	// ---

	public async getAll(username: string): Promise<TournamentsDto[]> {
		// fetch all => cursor object
		const clickedTournaments = await this.tournamentModel
			.find({ username, status: EnumStatus.INTERESTED })
			.limit(5)

		// if not exist any
		if (!clickedTournaments) throw new NotFoundException()

		// return all
		return clickedTournaments
	}

	// ---

	public async getOne(id: string, username: string): Promise<TournamentsDto> {
		// try to find
		const validTournamnet = await this.tournamentModel.findOne({
			_id: id,
			username,
			status: EnumStatus.INTERESTED
		})

		// if not exist
		if (!validTournamnet) throw new NotFoundException()

		// return one
		return validTournamnet
	}
}

// -----------------------------------------------------
