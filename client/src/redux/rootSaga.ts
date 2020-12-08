// ------------------------- Packages ------------------------------

import { all, fork } from 'redux-saga/effects'

// ------------------------ Local ----------------------------------

import { searchSagas } from './domains/search'

// -----------------------------------------------------------------

export function* rootSaga() {
	yield all([fork(searchSagas)])
}
