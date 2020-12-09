// ------------------------- Packages ------------------------------

import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
	Dropdown,
	DropdownItemProps,
	DropdownOnSearchChangeData
} from 'semantic-ui-react'

import {
	SearchChooseStartAction,
	ISearchInfo,
	itemSelector,
	SearchGetStartAction
} from '../redux/domains/search/'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

const _DropdownSearch = () => {
	// ---

	const items = useSelector(itemSelector)

	// ---

	useEffect(() => {}, [items])

	// ---

	const putItemsInDropDown = useCallback(
		(items: ISearchInfo) => {
			const searchedOptions: DropdownItemProps[] = [
				{ key: '', value: '', text: '', image: '' }
			]

			items &&
				items.documents.forEach(({ id, title, images, description }) => {
					const image =
						`https://cdn-images.win.gg/${images.square.filePath}` || ''

					searchedOptions.push({
						key: id,
						value: id,
						text: title,
						image,
						onClick: (
							event: React.MouseEvent<HTMLDivElement>,
							data: DropdownItemProps
						) => {
							dispatch(
								SearchChooseStartAction({
									tournament_id: id,
									image,
									title,
									description
								})
							)
						}
					})
				})
			return searchedOptions
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
		event.preventDefault()
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
			options={(items && putItemsInDropDown(items)) || []}
		/>
	)
}

export const DropdownSearch = _DropdownSearch
