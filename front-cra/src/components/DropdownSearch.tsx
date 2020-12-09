// ------------------------- Packages ------------------------------

import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Dropdown,
	DropdownItemProps,
	DropdownOnSearchChangeData
} from 'semantic-ui-react'
import { itemSelector, SearchGetStartAction } from '../redux/domains/search'
import { ISearchInfo } from '../redux/domains/search/search.interfaces'
import { SearchChooseStartAction } from '../redux/domains/search/search.actions'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

const WAIT_INTERVAL = 1000

const _DropdownSearch = () => {
	// ---

	const [options, setOptions] = useState<DropdownItemProps[]>([])

	// ---

	const items = useSelector(itemSelector)

	// ---

	useEffect(() => {
		if (items) {
			putItemsInDropDown(items)
		}
	}, [items])

	// ---

	const putItemsInDropDown = useCallback(
		(items: ISearchInfo) => {
			const searchedOptions: DropdownItemProps[] = []
			items.documents.map((el) => {
				searchedOptions.push({
					key: el.id,
					value: el.id,
					text: el.title,
					image: 'https://cdn-images.win.gg/' + el.images.square.filePath,
					onClick: (
						event: React.MouseEvent<HTMLDivElement>,
						data: DropdownItemProps
					) => {
						dispatch(
							SearchChooseStartAction({
								tournament_id: el.id,
								image: 'https://cdn-images.win.gg/' + el.images.square.filePath,
								title: el.title,
								description: el.description
							})
						)
					}
				})
			})
			setOptions(searchedOptions)
		},
		[items]
	)

	// ---

	const dispatch = useDispatch()

	// ---

	const onSearchChange = (
		event: React.SyntheticEvent<HTMLElement>,
		data: DropdownOnSearchChangeData
	) => {
		if (data.searchQuery.length > 2) {
			dispatch(SearchGetStartAction(data.searchQuery))
		}
	}

	// ---

	return (
		<Dropdown
			key={Math.random()}
			placeholder="Select Country"
			fluid
			search
			selection
			onSearchChange={onSearchChange}
			options={options}
		/>
	)
}

export const DropdownSearch = _DropdownSearch
