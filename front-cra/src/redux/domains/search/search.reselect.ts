// ------------------------- Packages ------------------------------

import { createSelector } from 'reselect'

// ------------------------ Local ----------------------------------

import { IApplicationStateModel } from '../../rootReducer'

// -----------------------------------------------------------------

const selectedImtes = (state: IApplicationStateModel) =>
	state.search.selectedItem

// -----------------------------------------------------------------

export const selectSalonsArray = createSelector([selectedImtes], (info) => info)

// -----------------------------------------------------------------
