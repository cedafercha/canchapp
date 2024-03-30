export interface Profile {
    _id: string,
    name: string
    modules: Module[]
}

export interface Module {
    _id: string,
    name: string,
    tabID: string,
    actions: Action[]
}

export enum Action {
	Create = 0,
	Edit = 1,
	Read = 2,
    Delete = 3
}