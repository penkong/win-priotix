// ------------------------- Packages ------------------------------

import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

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
	ISelectedItem,
	userNameSelector
} from '../redux/domains/search/'

// -----------------------------------------------------------------

interface ITournamentsDto {
	username: string
	tournament_id: string
	title: string
	image: string
	description?: string
}

// ---

const _DropdownSearch = () => {
	// ---

	const items = useSelector(itemSelector)
	const username = useSelector(userNameSelector)

	// ---

	useEffect(() => {}, [items])

	// ---

	const putItemsInDropDown = useCallback(
		(items: ISearchInfo) => {
			const searchedOptions = [{ key: '', value: '', text: '', image: '' }]

			if (items) {
				items.documents.forEach(({ id, title, images, description }) => {
					if (images) {
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
			}
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

	const onChange = async (
		event: React.SyntheticEvent<HTMLElement, Event>,
		data: DropdownProps
	) => {
		if (data.options) {
			const selected = data.options.filter((el) => el.key === data.value)
			const info = {
				tournament_id: selected[0].key.toString(),
				image: selected[0].image?.toString()!,
				title: selected[0].text?.toString()!,
				description: selected[0].description?.toString()! || ''
			}
			if (selected) {
				try {
					const body = {
						username,
						tournament_id: info.tournament_id,
						title: info.title,
						image: info.image,
						description: info.description
					}
					console.log(body)
					const { data } = await axios.post(
						'http://localhost:3001/api/v1/tournaments',
						body
					)
					if (data) {
						dispatch(SearchChooseStartAction(info as ISelectedItem))
					}
				} catch (error) {
					console.log(error)
				}
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
