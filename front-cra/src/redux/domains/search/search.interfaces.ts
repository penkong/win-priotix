export interface ISearchStateModel {
	username: string
	searchInfo: ISearchInfo[] | []
	selectedItem: ISelectedItem[] | []
	errorMessage: string
	isSearch: boolean
	loading: boolean
}

export interface ISearchInfo {
	maxScore: number
	category: string
	documents: ISearchItem[]
}

export interface ISelectedItem {
	id?: string
	username?: string
	tournament_id: string
	image: string
	title: string
	description?: string
}

export interface ISearchItem {
	score: number
	products: number[]
	id: string
	title: string
	short_title: string
	description: string
	game_id: string
	images: {
		[key: string]: {
			filePath: string
		}
	}
	tier: number
	country_name: string
	city: null | string
	slug: string
	start: string
	end: string
	prizepool: {
		[key: string]: { value: string; currency: any }
	}
	teams: {
		id: string
		slug: string
		short_name: string
		images: {
			[key: string]: { filePath: string }
		}
		ranking: {
			[key: string]: string | number
		}
	}[]
	source: string
}
