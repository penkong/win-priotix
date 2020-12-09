// ------------------------- Packages ------------------------------

// ------------------------- Local ---------------------------------

import { ISearchStateModel, SearchActionTypes, SearchActionsType } from '.'

// ------------------------ Types ----------------------------------

const {
	SEARCH_LOADING_START,
	SEARCH_GET_SUCCESS,
	SEARCH_GET_FAILURE,
	SEARCH_CHOOSE_SUCCESS,
	SEARCH_CHOOSE_FAILURE
} = SearchActionTypes

//  ----------------------- Raw State -----------------------------

const INITIAL_STATE: ISearchStateModel = {
	searchInfo: [],
	selectedItem: [],
	errorMessage: '',
	isSearch: false,
	loading: false
}

// ------------------------ Reducer -------------------------------

export const searchReducer = (
	state: ISearchStateModel = INITIAL_STATE,
	action: SearchActionsType
) => {
	switch (action.type) {
		// ---

		case SEARCH_LOADING_START:
			return { ...state, errorMessage: '', loading: true }

		// ---

		case SEARCH_GET_SUCCESS:
			return {
				...state,
				loading: false,
				isSearch: true,
				errorMessage: '',
				searchInfo: action.payload
			}

		// ---

		case SEARCH_GET_FAILURE:
			return {
				...state,
				loading: false,
				isSearch: false,
				errorMessage: action.payload,
				searchInfo: []
			}

		// ---

		case SEARCH_CHOOSE_SUCCESS:
			return {
				...state,
				loading: false,
				selectedItem: state.selectedItem.push(action.payload as ISelectedItem)
			}

		// ---

		case SEARCH_CHOOSE_FAILURE:
			return {
				...state,
				loading: false,
				selectedItem: []
			}

		// ---
		default:
			return state
	}
}
