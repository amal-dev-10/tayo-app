import { actionInterface, iContact } from "../../interface/common"

type props = {
    allContacts: iContact[],
    selectedContact: iContact
}

let initialState: props = {
    allContacts: [],
    selectedContact: {} as iContact
}

export const contacts = (state = initialState, action: actionInterface)=>{
    switch(action.type){
        case "ADD_CONTACT":
            let c = action.payload as iContact
            return {
                ...state,
                allContacts: JSON.parse(JSON.stringify([...state.allContacts, c]))
            }
        case "DELETE_CONTACT":
            let t = state.allContacts.filter((x)=>{return x.id != action.payload});
            return {
                ...state,
                allContacts: JSON.parse(JSON.stringify(t))
            }
        case "UPDATE_CONTACT":
            let payload = action.payload as iContact
            let temp = state.allContacts.map((x)=>{
                if(x.id === payload.id){
                    return payload
                }
                return x
            });
            return {
                ...state,
                allContacts: JSON.parse(JSON.stringify(temp))
            }
        case "SET_SELECTED_CONTACT":
            return {
                ...state,
                selectedContact: {...action.payload}
            }
        default:
            return state
    }
}