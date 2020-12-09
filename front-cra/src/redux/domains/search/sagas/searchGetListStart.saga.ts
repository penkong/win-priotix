// ------------------------- Packages ------------------------------

import { put, takeLatest, select } from 'redux-saga/effects'

// ------------------------- Local ---------------------------------

import {
	SearchActionTypes,
	SearchService,
	ISearchInfo,
	SearchLoadingStartAction,
	SearchGetStartActionType
} from '..'

// -----------------------------------------------------------------

const { SEARCH_GET_START } = SearchActionTypes

// ------------------------- Search --------------------------------

export function* SearchGetListSaga({ payload }: SearchGetStartActionType) {
	yield put(SearchLoadingStartAction())
	const data: ISearchInfo = yield SearchService.searchWinGG(
		payload
	) as Promise<ISearchInfo>
	// yield put(SalonsChooseFailureAction(data.error))
	// yield put(AuthSignInSuccessAction(data))
	// yield put(SalonsChooseSuccessAction(salonListWithSelected))
}

// ------------------------- Main -----------------------------------

export function* SearchGetListStartSaga() {
	yield takeLatest<SearchGetStartActionType>(
		SEARCH_GET_START,
		SearchGetListSaga
	)
}
