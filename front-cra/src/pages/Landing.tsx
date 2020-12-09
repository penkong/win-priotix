// ------------------------- Packages ------------------------------

import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'

// ------------------------ Local ----------------------------------

import { DropdownSearch } from '../components/'
import { SearchActionTypes } from '../../../client/src/redux/domains/search/search.types'

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
		<Grid style={{ marginTop: '2rem' }}>
			<Grid.Row>
				<Grid.Column width={9}>
					<DropdownSearch />
				</Grid.Column>
				<Grid.Column width={5}>
					<DropdownSearch />
				</Grid.Column>
			</Grid.Row>
		</Grid>
		// <div className="flex items-center w-80">
		// </div>
	)
}

// ---------------------------------

export const Landing = _Landing
