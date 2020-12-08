// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Landing: React.FC<IAppProps> = () => {
	// ------------  Interact with store --------------------------

	// const menuConfigFromStore = useSelector(selectMenuConfig)

	// const dispatch = useDispatch()
	const [apiInfo, setApiInfo] = useState<any>([])

	useEffect(() => {
		fetcher()
	}, [])

	const fetcher = async (info: string = 'lcs') => {
		try {
			// ID Image Title Description
			const res = await axios.get(
				`https://api-search.win.gg/search?q=${info}&index=tournament`
			)
			console.log(res.data[0].documents)
			const resInfo: any = []
			res.data[0].documents.forEach(
				({ id, title, description, images }: any) => {
					const image = 'http://cdn-images.win.gg/' + images.square.filePath
					resInfo.push({
						id,
						title,
						description,
						image
					})
				}
			)
			setApiInfo(resInfo)
		} catch (error) {
			console.log(error)
		}
	}

	// -------------------- Load jsx --------------------------
	if (!apiInfo) return <div>waiting</div>

	return (
		<>
			<div className="sh">
				heslfsdf
				{apiInfo.map((el: any) => {
					return <img key={el.id} src={el.image} />
				})}
			</div>
		</>
	)
}

// ---------------------------------

export const Landing = _Landing
