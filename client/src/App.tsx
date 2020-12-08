// ------------------------- Packages ------------------------------

import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

// ------------------------ Local ----------------------------------

import { Landing } from './pages'

// -----------------------------------------------------------------

export const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
		</Switch>
	)
}
