// ---------------------- Packages ------------------------

import mongoose from 'mongoose'
import { EnumStatus } from '../../tournaments.service'

// --------------------------------------------------------

// input
export interface ITournamentsInfo {
	username: string
	tournament_id: string
	title: string
	image: string
	description?: string
	status?: EnumStatus
}

// add to this(model)
export interface ITournamentsModel extends mongoose.Model<ITournamentsDoc> {
	build(attrs: ITournamentsInfo): ITournamentsDoc
}

// output - return
export interface ITournamentsDoc extends mongoose.Document {
	username: string
	tournament_id: string
	title: string
	image: string
	description?: string
	status?: EnumStatus
}
