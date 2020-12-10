// ------------------------- Packages ------------------------------

// ------------------------- Local ---------------------------------

import { ISearchStateModel, EnumSearchAction, SearchActionsType } from '.'

// ------------------------ Types ----------------------------------

//  ----------------------- Raw State -----------------------------

const INITIAL_STATE: ISearchStateModel = {
	username: '',
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
		case EnumSearchAction.SET_USERNAME:
			return { ...state, username: action.payload }

		// ---

		case EnumSearchAction.SEARCH_LOADING_START:
			return { ...state, errorMessage: '', loading: true }

		// ---

		case EnumSearchAction.SEARCH_GET_SUCCESS:
			return {
				...state,
				loading: false,
				isSearch: true,
				errorMessage: '',
				searchInfo: action.payload
			}

		// ---

		case EnumSearchAction.SEARCH_GET_FAILURE:
			return {
				...state,
				loading: false,
				isSearch: false,
				errorMessage: action.payload,
				searchInfo: []
			}

		// ---

		case EnumSearchAction.SEARCH_CHOOSE_START:
			return {
				...state,
				loading: false,
				errorMessage: '',
				selectedItem: [
					...state.selectedItem.filter(
						(el) => el.title !== action.payload.title
					),
					action.payload
				]
			}

		// ---

		case EnumSearchAction.SEARCH_CHOOSE_FAILURE:
			return {
				...state,
				loading: false,
				selectedItem: [...state.selectedItem],
				errorMessage: action.payload
			}

		// ---

		default:
			return state
	}
}
