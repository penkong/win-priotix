// ---------------------- Packages ------------------------

import mongoose from 'mongoose'

// --------------------------------------------------------

// input
export interface ITournamentsInfo {
	email: string
	password: string
}

// add to this(model)
export interface ITournamentsModel extends mongoose.Model<ITournamentsDoc> {
	build(attrs: ITournamentsInfo): ITournamentsDoc
}

// output - return
export interface ITournamentsDoc extends mongoose.Document {
	email: string
	password: string
}
