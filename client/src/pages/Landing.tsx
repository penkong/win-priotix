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
	const [apiInfo, setApiInfo] = useState([])

	useEffect(() => {
		fetcher()
	}, [])

	const fetcher = async (info: string = 'star') => {
		try {
			// ID
			// Image
			// Title
			// Description
			const res = await axios.get(
				`https://api-search.win.gg/search?q=${info}&index=tournament`
			)
			console.log(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	// -------------------- Load jsx --------------------------

	return (
		<>
			<div className="sh">hello from landing</div>
		</>
	)
}

// ---------------------------------

export const Landing = _Landing
