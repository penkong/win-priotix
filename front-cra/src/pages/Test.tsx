// ------------------------- Packages ------------------------------

import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Test: React.FC<IAppProps> = () => {
	useEffect(() => {}, [])

	return <div className="sh">I am Test Page</div>
}

// ---------------------------------

export const Test = _Test
