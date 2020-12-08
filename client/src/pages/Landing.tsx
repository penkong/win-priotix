// ------------------------- Packages ------------------------------

import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

export interface IAppProps {}

// ---

const _Landing: React.FC<IAppProps> = () => {
	// ------------  Interact with store --------------------------

	// const menuConfigFromStore = useSelector(selectMenuConfig)

	// const dispatch = useDispatch()

	useEffect(() => {}, [])

	// -------------------- Load jsx --------------------------

	return (
		<>
			<div className="sh">hello from landing</div>
		</>
	)
}

// ---------------------------------

export const Landing = _Landing
