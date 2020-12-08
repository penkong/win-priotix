export interface ISalonListModel {
	Id: string
	Name: string
	Selected: boolean
}

export interface ISalonODataOptionsFromPageModel {
	skip: number
	top: number
	orderBy?: string
}
