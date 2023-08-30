import { actionInterface, link } from "../../interface/common"

type props = {
    allLinks: link[],
}

let initialState: props = {
    allLinks: [
        {
            name: "Contacts",
            id: 1,
            mode: "",
            active: true
        },
        {
            name: "Maps and Charts",
            id: 2,
            mode: "",
            active: false
        }
    ]
}

export const sidebar = (state = initialState, action: actionInterface)=>{
    switch(action.type){
        case "SET_ACTIVE_SIDEBAR_LINK":
            let temp = state.allLinks.map((x)=>{
                // if(x.id === action.payload as number){
                //     x.active = true
                //     return x
                // }
                // x.active = false
                return x
            });
            return {
                ...state,
                allLinks: JSON.parse(JSON.stringify(temp))
            }
        default:
            return state
    }
}