import { iContact } from "../../interface/common"

export const setActiveLinkAction = (payload: number)=>{
    return {
        type: "SET_ACTIVE_SIDEBAR_LINK",
        payload: payload
    }
}

export const updateContactAction = (payload: iContact)=>{
    return {
        type: "UPDATE_CONTACT",
        payload: payload
    }
}

export const addContactAction = (payload: iContact)=>{
    return {
        type: "ADD_CONTACT",
        payload: payload
    }
}

export const setSelectedContactAction = (payload: iContact)=>{
    return {
        type: "SET_SELECTED_CONTACT",
        payload: payload
    }
}

export const deleteContactAction = (payload: number)=>{
    return {
        type: "DELETE_CONTACT",
        payload: payload
    }
}