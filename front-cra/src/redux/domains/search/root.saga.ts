// ------------------------- Packages ------------------------------

import { all, fork } from 'redux-saga/effects'
import { SearchGetListStartSaga } from '.'

// ------------------------- Local ---------------------------------

// -----------------------------------------------------------------

export function* searchSagas() {
	yield all([
		// search list
		fork(SearchGetListStartSaga)
	])
}

// -----------------------------------------------------------------
