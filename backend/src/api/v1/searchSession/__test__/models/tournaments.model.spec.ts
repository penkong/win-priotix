// ---------------------- Packages ------------------------

import { Test, TestingModule } from '@nestjs/testing'
import * as mongoose from 'mongoose'

// ---------------------- Locals --------------------------

import {
	ITournamentsDoc,
	ITournamentsModel,
	TournamentsSchema
} from '../../models'

// --------------------------------------------------------

// for test need to add to before Each
const Tournaments = mongoose.model<ITournamentsDoc, ITournamentsModel>(
	'User',
	TournamentsSchema
)

// --------------------------------------------------------

describe('Tournoments Model Test', () => {
	it('should be defined', () => {
		expect(Tournaments).toBeDefined()
	})
})
