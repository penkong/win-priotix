// ------------------------- Packages ------------------------------

import { put, select, takeLatest } from 'redux-saga/effects'

// ------------------------- Local ---------------------------------

import {
	EnumSearchAction,
	SearchService,
	ISearchInfo,
	SearchLoadingStartAction,
	SearchGetStartActionType,
	SearchGetSuccessAction,
	SearchGetFailureAction
} from '..'
import { IApplicationStateModel } from '../../../rootReducer'

// -----------------------------------------------------------------

const { SEARCH_GET_START } = EnumSearchAction

// ------------------------- Search --------------------------------

export function* SearchGetListSaga({ payload }: SearchGetStartActionType) {
	yield put(SearchLoadingStartAction())
	try {
		const data: ISearchInfo[] = yield SearchService.searchWinGG(
			payload
		) as Promise<ISearchInfo>

		if (data[0].documents.length > 0) {
			yield put(SearchGetSuccessAction(data))
		}
	} catch (error) {
		console.log(error.response)
		yield put(SearchGetFailureAction(error.reponse))
	}
}

// ------------------------- Main -----------------------------------

export function* SearchGetListStartSaga() {
	yield takeLatest<SearchGetStartActionType>(
		SEARCH_GET_START,
		SearchGetListSaga
	)
}
