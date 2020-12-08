// ---------------------- Packages ------------------------

import { Test, TestingModule } from '@nestjs/testing'

// ---------------------- Locals --------------------------

import { TournamentsService } from '../tournaments.service'

// --------------------------------------------------------

describe('AuthService Test', () => {
	let service: TournamentsService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TournamentsService]
		}).compile()

		service = module.get<TournamentsService>(TournamentsService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
