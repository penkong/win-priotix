// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Dropdown,
	DropdownItemProps,
	DropdownOnSearchChangeData
} from 'semantic-ui-react'
import { itemSelector, SearchGetStartAction } from '../redux/domains/search'
import { ISearchInfo } from '../redux/domains/search/search.interfaces'

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

	const putItemsInDropDown = (items: ISearchInfo) => {
		const searchedOptions: DropdownItemProps[] = []
		items.documents.map((el) => {
			searchedOptions.push({
				key: el.id,
				value: el.short_title,
				text: el.title,
				image: 'https://cdn-images.win.gg/' + el.images.square.filePath,
				onClick: (
					event: React.MouseEvent<HTMLDivElement>,
					data: DropdownItemProps
				) => {
					return data.selected
				}
			})
		})
		setOptions(searchedOptions)
	}

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

// const countryOptions = [
// 	{
// 		key: 'key come here',
// 		value: 'LCS',
// 		image:
// 			'https://cdn-images.win.gg/external/1/tournament/NDUyOQ/591077d5977f51d7a3bccbd4df6bc3bc/square/original.jpg',
// 		text: 'Afghanistan',
// 		onClick: (
// 			event: React.MouseEvent<HTMLDivElement>,
// 			data: DropdownItemProps
// 		) => {
// 			console.log(data.active)
// 		}
// 	}
// ]
