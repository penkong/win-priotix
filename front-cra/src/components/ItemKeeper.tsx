// ------------------------- Packages ------------------------------

import React from 'react'
import { useSelector } from 'react-redux'
import { Segment, Item, Container } from 'semantic-ui-react'

// ------------------------ Local ----------------------------------

import { contentSelector } from '../redux/domains/search'

// -----------------------------------------------------------------

const _ItemKeeper = () => {
	const content = useSelector(contentSelector)

	const renderContents = (content: any) =>
		content.map(({ image, tournament_id, description, title }: any) => (
			<Item.Group divided key={title + Math.random()}>
				<Item>
					<Item.Image src={image} />
					<Item.Content>
						<Item.Header as="a">{title}</Item.Header>
						<Item.Description>{description}</Item.Description>
					</Item.Content>
				</Item>
			</Item.Group>
		))

	return (
		<Segment>
			<Container>{renderContents(content)}</Container>
		</Segment>
	)
}

// -----------------------------------------------------------------

export const ItemKeeper = _ItemKeeper
