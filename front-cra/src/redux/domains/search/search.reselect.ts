// ------------------------- Packages ------------------------------

import { createSelector } from 'reselect'

// ------------------------ Local ----------------------------------

import { IApplicationStateModel } from '../../rootReducer'

// -----------------------------------------------------------------

const searchedItemSelector = (state: IApplicationStateModel) =>
	state.search.searchInfo

// -----------------------------------------------------------------

export const itemSelector = createSelector(
	[searchedItemSelector],
	(info) => info[0]
)

// -----------------------------------------------------------------
