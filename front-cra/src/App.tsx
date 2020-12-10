// ------------------------- Packages ------------------------------

import React from 'react'
import { Switch, Route } from 'react-router-dom'

// ------------------------ Local ----------------------------------

import { Landing, Test, Search } from './pages'

// -----------------------------------------------------------------

interface IAppProps {}

// -----------------------------------------------------------------

export const App: React.FC<IAppProps> = () => {
	return (
		<Switch>
			<Route exact path="/test" component={Test} />
			<Route exact path="/search" component={Search} />
			<Route exact path="/" component={Landing} />
		</Switch>
	)
}
