// BRAIN LOGIC PURE ----------------------------------------

import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

// ----------------------------------------------------------------

import { persistedReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

// ----------------------------------------------------------------

const sagaMiddleware = createSagaMiddleware()

const middlewares = []

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

middlewares.push(sagaMiddleware)

// ------------------------------

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(
	store as any /*<RootState, SearchAction>*/
)
