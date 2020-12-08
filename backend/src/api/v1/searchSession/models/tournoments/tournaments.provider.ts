// ------------------------ Packages -------------------------------

import { Connection } from 'mongoose'

// ------------------------ Local ----------------------------------

import { ITournamentsDoc, TournamentsSchema } from '..'
import {
	TOURNAMENT_MODEL,
	DATABASE_CONNECTION,
	TOURNAMENT
} from '../../../../../constants'

// -----------------------------------------------------------------

export const tournamentsProviders = [
	{
		provide: TOURNAMENT_MODEL,
		useFactory: (connection: Connection) =>
			connection.model<ITournamentsDoc>(TOURNAMENT, TournamentsSchema),
		inject: [DATABASE_CONNECTION]
	}
]

// -----------------------------------------------------------------
