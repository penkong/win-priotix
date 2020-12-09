// ------------------------- Packages ------------------------------

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// ------------------------ Local ----------------------------------

import { store, persistor } from './redux/'
import { App } from './App'

// -----------------------------------------------------------------

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('_win')
)
