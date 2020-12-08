// ------------------------- Packages ------------------------------

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// ------------------------ Local ----------------------------------

import './style.scss'
import { App } from './App'

// -----------------------------------------------------------------

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('_win')
)
