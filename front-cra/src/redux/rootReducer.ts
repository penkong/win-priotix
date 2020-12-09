// ------------------------- Packages ------------------------------

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// ------------------------ Local ----------------------------------

import {
	ISearchStateModel,
	searchReducer,
	SearchActionsType
} from './domains/search'

// ------------------- App State Model ---------------------------------

export interface IApplicationStateModel {
	search: ISearchStateModel
}

// ------------------- Persist state to local -----------------------------------

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['search']
}

// --------------------- Create rootReducer ---------------------------------

export const rootReducer = combineReducers<
	IApplicationStateModel,
	SearchActionsType
>({
	search: searchReducer
})

export type RootState = ReturnType<typeof rootReducer>

// ---------------------- Persisted Reducer --------------------------------

export const persistedReducer = persistReducer(persistConfig, rootReducer)
