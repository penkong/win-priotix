// ------------------------- Packages ------------------------------

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

// ------------------------ Local ----------------------------------

import { DropdownSearch, ItemKeeper } from '../components/'
import { userNameSelector } from '../redux/domains/search'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Search: React.FC<IAppProps> = () => {
	// ---

	const username = useSelector(userNameSelector)
	const history = useHistory()

	// ---

	useEffect(() => {
		if (!username) history.push('/')
	}, [username])

	// ---

	return (
		<Grid centered={true} style={{ marginTop: '1rem' }} stackable>
			<Grid.Column width={5}>
				<DropdownSearch />
			</Grid.Column>
			<Grid.Column width={7}>
				<ItemKeeper />
			</Grid.Column>
		</Grid>
	)
}

// ---------------------------------

export const Search = _Search
