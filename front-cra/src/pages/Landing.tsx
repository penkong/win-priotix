// ------------------------- Packages ------------------------------

import React, { useEffect } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'

// ------------------------ Local ----------------------------------

import { DropdownSearch } from '../components/'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Landing: React.FC<IAppProps> = () => {
	// ------------  Interact with store --------------------------

	// const menuConfigFromStore = useSelector(selectMenuConfig)

	// const dispatch = useDispatch()
	// const [apiInfo, setApiInfo] = useState<any>([])

	useEffect(() => {
		// fetcher()
	}, [])

	// const fetcher = async (info: string = 'star') => {
	// 	try {
	// 		// ID Image Title Description
	// 		const res = await axios.get(
	// 			`https://api-search.win.gg/search?q=${info}&index=tournament`
	// 		)
	// 		console.log(res.data[0].documents)
	// 		const resInfo: any = []
	// 		res.data[0].documents.forEach(
	// 			({ id, title, description, images }: any) => {
	// 				const image = images.square.filePath
	// 				resInfo.push({
	// 					id,
	// 					title,
	// 					description,
	// 					image
	// 				})
	// 			}
	// 		)
	// 		setApiInfo(resInfo)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// -------------------- Load jsx --------------------------
	// if (!apiInfo) return <div>waiting</div>

	{
		/* <div classNameName="sh">
		heslfsdf
		{apiInfo.map((el: any) => {
			return (
				<img key={el.id} src={'http://cdn-images.win.gg/' + el.image} />
			)
		})}
	</div> */
	}
	return (
		<Grid centered={true} style={{ marginTop: '1rem' }} stackable>
			<Grid.Column width={6}>
				<DropdownSearch />
			</Grid.Column>
			<Grid.Column width={6}>
				<Segment size="massive">Content</Segment>
			</Grid.Column>
		</Grid>
	)
}

// ---------------------------------

export const Landing = _Landing
