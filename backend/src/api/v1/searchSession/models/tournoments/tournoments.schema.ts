// ---------------------- Packages ------------------------

// have to import like this at this version (nest throw error if not)
import * as mongoose from 'mongoose'

// ---------------------- Locals ------------------------

// ---------------------- Schema Define ----------------------------------

export const TournamentsSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		// view level logic
		toJSON: {
			transform(doc, returnObject) {
				returnObject.id = returnObject._id
				delete returnObject._id
				delete returnObject.password
				delete returnObject.__v
			}
		}
	}
)

// -------------------------- Plugin ------------------------------

// optimistic data versioning : for handling Concurrency challenges

// TournomentsSchema.set('versionKey', 'version')
// TournomentsSchema.plugin(updateIfCurrentPlugin)

// -------------------------- Middlewares ------------------------------

// TournomentsSchema.pre('save', async function (done) {
// 	done()
// })

// -------------------------- Schema Logic ------------------------------

// TournomentsSchema.methods.doSthOnSchema = async function () {
// 	 this == the doc we just call method on it .
// }

// -------------------------- Model Logic ------------------------------

// TournomentsSchema.statics.doSthOnModelItSelf = () => {}

// ---------------------------------------------------------------------
