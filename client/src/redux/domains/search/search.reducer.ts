// ------------------------- Packages ------------------------------

// ------------------------- Local ---------------------------------

import {
	ISearchStateModel,
	ISearchModel,
	SearchActionTypes,
	SearchActions
} from '.'

// ------------------------ Types ----------------------------------

const {
	SEARCH_LOADING_START,
	SEARCH_LOADING_FAILURE,
	SEARCH_GET_SUCCESS,
	SEARCH_GET_FAILURE,
	SEARCH_CHOOSE_SUCCESS,
	SEARCH_CHOOSE_FAILURE
} = SearchActionTypes

//  ----------------------- Raw State -----------------------------

export const searchValueRaw: ISearchModel = {}

const INITIAL_STATE: ISearchStateModel = {
	search: searchValueRaw,
	errorMessage: '',
	isSearch: false
}

// ------------------------ Reducer -------------------------------

export const searchReducer = (state = INITIAL_STATE, action: SearchActions) => {
	switch (action.type) {
		case SEARCH_LOADING_START:
		case SEARCH_LOADING_FAILURE:
		case SEARCH_GET_SUCCESS:
		case SEARCH_GET_FAILURE:
		case SEARCH_CHOOSE_SUCCESS:
		case SEARCH_CHOOSE_FAILURE:
		default:
			return state
	}
}
