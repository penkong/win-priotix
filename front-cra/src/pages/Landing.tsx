// ------------------------- Packages ------------------------------

import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'

// ------------------------ Local ----------------------------------

import { DropdownSearch, ItemKeeper } from '../components/'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Landing: React.FC<IAppProps> = () => {
	useEffect(() => {}, [])

	return (
		<Grid centered={true} style={{ marginTop: '1rem' }} stackable>
			<Grid.Column width={6}>
				<DropdownSearch />
			</Grid.Column>
			<Grid.Column width={6}>
				<ItemKeeper />
			</Grid.Column>
		</Grid>
	)
}

// ---------------------------------

export const Landing = _Landing
