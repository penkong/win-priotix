// ------------------------- Packages ------------------------------

// ------------------------ Local ----------------------------------

import { ISearchInfo, ISelectedItem, EnumSearchAction } from '.'

// ------------------------- Username Action ---------------------------------

export interface SetUserNameStartActionType {
	type: EnumSearchAction.SET_USERNAME
	payload: string
}

export const SetUserNameStartAction = (username: string) => ({
	type: EnumSearchAction.SET_USERNAME,
	payload: username
})

// ------------------------- Loading Action ---------------------------------

export interface SearchLoadingStartActionType {
	type: EnumSearchAction.SEARCH_LOADING_START
	payload: null
}

export const SearchLoadingStartAction = () => ({
	type: EnumSearchAction.SEARCH_LOADING_START,
	payload: null
})

// ------------------------- Search Actions ---------------------------------

export interface SearchGetStartActionType {
	type: EnumSearchAction.SEARCH_GET_START
	payload: string
}

export const SearchGetStartAction = (query: string) => ({
	type: EnumSearchAction.SEARCH_GET_START,
	payload: query
})

// ---

export interface SearchGetSuccessActionType {
	type: EnumSearchAction.SEARCH_GET_SUCCESS
	payload: ISearchInfo[]
}

export const SearchGetSuccessAction = (info: ISearchInfo[]) => ({
	type: EnumSearchAction.SEARCH_GET_SUCCESS,
	payload: info
})

// ---

export interface SearchGetFailureActionType {
	type: EnumSearchAction.SEARCH_GET_FAILURE
	payload: string
}

export const SearchGetFailureAction = (
	error: string = 'there is problem with search'
) => ({
	type: EnumSearchAction.SEARCH_GET_FAILURE,
	payload: error
})

// ------------------------- Choose Items Actions ---------------------------------

export interface SearchChooseStartActionType {
	type: EnumSearchAction.SEARCH_CHOOSE_START
	payload: ISelectedItem
}

export const SearchChooseStartAction = (info: ISelectedItem) => ({
	type: EnumSearchAction.SEARCH_CHOOSE_START,
	payload: info
})

// ---

export interface SearchChooseSuccessActionType {
	type: EnumSearchAction.SEARCH_CHOOSE_SUCCESS
	payload: null
}

export const SearchChooseSuccessAction = () => ({
	type: EnumSearchAction.SEARCH_CHOOSE_SUCCESS,
	payload: null
})

// ---

export interface SearchChooseFailureActionType {
	type: EnumSearchAction.SEARCH_CHOOSE_FAILURE
	payload: string
}

export const SearchChooseFailureAction = (
	error: string = 'there is problem with select item'
) => ({
	type: EnumSearchAction.SEARCH_CHOOSE_FAILURE,
	payload: error
})

// --------------------------------------------------------------------------------

export type SearchAction =
	| typeof SetUserNameStartAction
	| typeof SearchLoadingStartAction
	| typeof SearchGetStartAction
	| typeof SearchGetSuccessAction
	| typeof SearchGetFailureAction
	| typeof SearchChooseStartAction
	| typeof SearchChooseSuccessAction
	| typeof SearchChooseFailureAction

export type SearchActionsType =
	| SetUserNameStartActionType
	| SearchLoadingStartActionType
	| SearchGetStartActionType
	| SearchGetSuccessActionType
	| SearchGetFailureActionType
	| SearchChooseStartActionType
	| SearchChooseSuccessActionType
	| SearchChooseFailureActionType
