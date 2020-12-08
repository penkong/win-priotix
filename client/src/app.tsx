// ------------------------- Packages ------------------------------

import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

// ------------------------ Local ----------------------------------

import { Landing } from './pages'

// -----------------------------------------------------------------

export default ({ history }: any) => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Landing} />
			</Switch>
		</Router>
	)
}
