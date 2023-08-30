export type link = {
    name: string,
    id: number,
    mode: string,
    active: boolean
}

export type actionInterface = {
    type: string
    payload: any,
}

export type iContact = {
    firstName: string,
    lastName: string,
    active: boolean,
    id: number
}