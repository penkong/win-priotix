// ------------------------- Packages ------------------------------

import axios from 'axios'

// ------------------------ Local ----------------------------------

export class SearchService {
	// ---

	private constructor() {}

	// ---

	static async searchWinGG(query: string) {
		try {
			// we want ID Image Title Description
			const { data } = await axios.get(
				`https://api-search.win.gg/search?q=${query}&index=tournament`
			)
			return data
		} catch (error) {
			console.log(error)
			return error.response
		}
	}
}
