// ------------------------- Packages ------------------------------

import { put, takeLatest, select } from 'redux-saga/effects'

// ------------------------- Local ---------------------------------

import {
	SearchActionTypes
	SalonProviderService,
	SalonsChooseStartActionType,
	// SalonsChooseSuccessAction,
	// SalonsChooseFailureAction,
} from '..'

// -----------------------------------------------------------------

const { SEARCH_CHOOSE_START } = SearchActionTypes

// ----------------- Search -------------------

export function* SearchGetListSaga({ payload }: SalonsChooseStartActionType) {
	// const Token = yield select(refreshToken)
	// const info: IRefreshTokenModel = {
	// 	Token,
	// 	CurrentSalonId: payload,
	// 	CurrentClientKey: ''
	// }
	// const data = yield AuthProviderService.CheckRefreshToken(info)
	// if (data.statusCode === 404) {
	// 	yield put(SalonsChooseFailureAction(data.error))
	// } else {
	// 	yield put(AuthSignInSuccessAction(data))
	// 	const { MultipleAccessItemUrl } = yield select(appConfig)
	// 	const salonListWithSelected = yield SalonProviderService.getSalons(
	// 		MultipleAccessItemUrl
	// 	)
	// 	yield put(SalonsChooseSuccessAction(salonListWithSelected))
	// }
}

// ------------------------- Main -----------------------------------

export function* SearchGetListStartSaga() {
	yield takeLatest<SalonsChooseStartActionType>(
		SEARCH_CHOOSE_START,
		SearchGetListSaga
	)
}
