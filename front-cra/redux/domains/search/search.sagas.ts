// ------------------------- Packages ------------------------------

import { all, fork } from 'redux-saga/effects'

// ------------------------- Local ---------------------------------

// -----------------------------------------------------------------

export function* searchSagas() {
	yield all([
		// search list
		fork(SearchGetListStartSaga),
		// clear search list
		fork(SearchClearStartSaga),
		// choose
		fork(SearchChooseStartSaga)
	])
}
