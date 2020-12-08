// ------------------------ Packages -------------------------------

import { Module } from '@nestjs/common'

// ------------------------ Local ----------------------------------

import { DatabaseModule } from '../../../Database'
import { TournamentsController } from './tournaments.controller'
import { TournamentsService } from './tournaments.service'
import { tournamentsProviders } from './models/'

// -----------------------------------------------------------------

@Module({
	imports: [DatabaseModule],
	controllers: [TournamentsController],
	providers: [TournamentsService, ...tournamentsProviders]
})
export class TournamentsModule {}
