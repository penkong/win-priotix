// ------------------------- Packages ------------------------------

import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
	Dropdown,
	DropdownProps,
	DropdownOnSearchChangeData
} from 'semantic-ui-react'

// ------------------------ Local ----------------------------------

import {
	SearchChooseStartAction,
	ISearchInfo,
	itemSelector,
	SearchGetStartAction,
	ISelectedItem
} from '../redux/domains/search/'

// -----------------------------------------------------------------

const _DropdownSearch = () => {
	// ---

	const items = useSelector(itemSelector)

	// ---

	useEffect(() => {}, [items])

	// ---

	const putItemsInDropDown = useCallback(
		(items: ISearchInfo) => {
			const searchedOptions = [{ key: '', value: '', text: '', image: '' }]

			items &&
				items.documents.forEach(({ id, title, images, description }) => {
					if (images.square.filePath) {
						const image =
							`https://cdn-images.win.gg/${images.square.filePath || ''}` || ''
						searchedOptions.push({
							key: id,
							value: id,
							text: title,
							image
						})
					}
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
			event.preventDefault()
			dispatch(SearchGetStartAction(data.searchQuery))
		}
	}

	// ---

	const onChange = (
		event: React.SyntheticEvent<HTMLElement, Event>,
		data: DropdownProps
	) => {
		if (data.options) {
			const selected = data.options.filter((el) => el.key === data.value)
			const info = {
				tournament_id: selected[0].id,
				image: selected[0].image,
				title: selected[0].text,
				description: selected[0].description
			}
			if (selected) {
				dispatch(SearchChooseStartAction(info as ISelectedItem))
			}
		}
	}

	// ---

	return (
		<Dropdown
			placeholder="Select Tournament"
			fluid
			search
			selection
			selectOnBlur
			onSearchChange={onSearchChange}
			options={(items && putItemsInDropDown(items)) || []}
			onChange={onChange}
		/>
	)
}

export const DropdownSearch = _DropdownSearch
