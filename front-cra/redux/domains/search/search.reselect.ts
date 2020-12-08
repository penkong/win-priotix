// ------------------------- Packages ------------------------------

import { createSelector } from 'reselect'

// ------------------------ Local ----------------------------------

import { IApplicationStateModel } from '../../rootReducer'

// -----------------------------------------------------------------

const selectSearch = (state: IApplicationStateModel) => state.search

// -----------------------------------------------------------------

export const selectSalonsArray = createSelector(
	[selectSearch],
	(searches) => searches
)

// -----------------------------------------------------------------
