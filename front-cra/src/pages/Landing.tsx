// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SetUserNameStartAction } from '../redux/domains/search'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Landing: React.FC<IAppProps> = () => {
	// ---

	const [name, setName] = useState('')

	// ---

	const history = useHistory()
	const dispatch = useDispatch()

	// ---

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value)

	// ---

	const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(SetUserNameStartAction(name))
		history.push('/search')
	}

	return (
		<Grid centered={true} style={{ marginTop: '1rem' }} stackable>
			<Grid.Column width={4}>
				<div className="ui action input">
					<input type="text" placeholder="Your Name..." onChange={onChange} />
					<button
						className="ui button"
						disabled={name.length < 3 ? true : false}
						onClick={onClick}
					>
						GO
					</button>
				</div>
			</Grid.Column>
		</Grid>
	)
}

// ---------------------------------

export const Landing = _Landing
