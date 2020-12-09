// ------------------------- Packages ------------------------------

import React from 'react'
import { useSelector } from 'react-redux'
import { Segment } from 'semantic-ui-react'

// ------------------------ Local ----------------------------------

import { contentSelector } from '../redux/domains/search'

// -----------------------------------------------------------------

const _ItemKeeper = () => {
	const content = useSelector(contentSelector)

	const renderContents = (content: any) => {
		return content.map((el: any) => (
			<div key={el.tournament_id}>{el.description}</div>
		))
	}

	return <Segment size="massive">{renderContents(content)}</Segment>
}

// -----------------------------------------------------------------

export const ItemKeeper = _ItemKeeper
