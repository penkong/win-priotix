// ------------------------- Packages ------------------------------

import React, { useEffect } from 'react'
import { AnyIfEmpty, useDispatch } from 'react-redux'
import {
	Dropdown,
	DropdownItemProps,
	DropdownOnSearchChangeData
} from 'semantic-ui-react'
import { SearchGetStartAction } from '../redux/domains/search'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

const WAIT_INTERVAL = 1000

const _DropdownSearch = () => {
	// ---

	useEffect(() => {}, [])

	// ---

	const dispatch = useDispatch()
	const onSearchChange = (
		event: React.SyntheticEvent<HTMLElement>,
		data: DropdownOnSearchChangeData
	) => {
		if (data.searchQuery.length > 2) {
			dispatch(SearchGetStartAction(data.searchQuery))
		}
	}

	// ---

	// ---

	return (
		<Dropdown
			placeholder="Select Country"
			fluid
			search
			selection
			onSearchChange={onSearchChange}
			options={countryOptions}
		/>
	)
}

export const DropdownSearch = _DropdownSearch

const countryOptions = [
	{
		key: 'key come here',
		value: 'LCS',
		image:
			'https://cdn-images.win.gg/external/1/tournament/NDUyOQ/591077d5977f51d7a3bccbd4df6bc3bc/square/original.jpg',
		text: 'Afghanistan',
		onClick: (
			event: React.MouseEvent<HTMLDivElement>,
			data: DropdownItemProps
		) => {
			console.log(data.active)
		}
	}
]
