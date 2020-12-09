// ------------------------- Packages ------------------------------

// ------------------------ Local ----------------------------------

import { ISearchInfo, ISelectedItem, SearchActionTypes } from '.'

// -----------------------------------------------------------------

const {
	SEARCH_LOADING_START,
	SEARCH_GET_START,
	SEARCH_GET_SUCCESS,
	SEARCH_GET_FAILURE,
	SEARCH_CHOOSE_START,
	SEARCH_CHOOSE_SUCCESS,
	SEARCH_CHOOSE_FAILURE
} = SearchActionTypes

// ------------------------- Loading Action ---------------------------------

export interface SearchLoadingStartActionType {
	type: SearchActionTypes.SEARCH_LOADING_START
	payload: null
}

export const SearchLoadingStartAction = () => ({
	type: SEARCH_LOADING_START,
	payload: null
})

// ------------------------- Search Actions ---------------------------------

export interface SearchGetStartActionType {
	type: SearchActionTypes.SEARCH_GET_START
	payload: string
}

export const SearchGetStartAction = (query: string) => ({
	type: SEARCH_GET_START,
	payload: query
})

// ---

export interface SearchGetSuccessActionType {
	type: SearchActionTypes.SEARCH_GET_SUCCESS
	payload: ISearchInfo[]
}

export const SearchGetSuccessAction = (info: ISearchInfo[]) => ({
	type: SEARCH_GET_SUCCESS,
	payload: info
})

// ---

export interface SearchGetFailureActionType {
	type: SearchActionTypes.SEARCH_GET_FAILURE
	payload: string
}

export const SearchGetFailureAction = (
	error: string = 'there is problem with search'
) => ({
	type: SEARCH_GET_FAILURE,
	payload: error
})

// ------------------------- Choose Items Actions ---------------------------------

export interface SearchChooseStartActionType {
	type: SearchActionTypes.SEARCH_CHOOSE_START
	payload: ISelectedItem
}

export const SearchChooseStartAction = (info: ISelectedItem) => ({
	type: SEARCH_GET_START,
	payload: info
})

// ---

export interface SearchChooseSuccessActionType {
	type: SearchActionTypes.SEARCH_CHOOSE_SUCCESS
	payload: null
}

export const SearchChooseSuccessAction = () => ({
	type: SEARCH_GET_SUCCESS,
	payload: null
})

// ---

export interface SearchChooseFailureActionType {
	type: SearchActionTypes.SEARCH_CHOOSE_FAILURE
	payload: string
}

export const SearchChooseFailureAction = (
	error: string = 'there is problem with select item'
) => ({
	type: SEARCH_GET_FAILURE,
	payload: error
})

// --------------------------------------------------------------------------------

export type SearchActionsType =
	| SearchGetStartActionType
	| SearchGetSuccessActionType
	| SearchGetFailureActionType
	| SearchChooseStartActionType
	| SearchChooseSuccessActionType
	| SearchChooseFailureActionType
