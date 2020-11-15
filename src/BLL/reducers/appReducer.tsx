import {Dispatch} from "redux";
import {setDataTC} from "./dataReducer";
import {setFingerPrintTC} from "./fingerPrintReducer";
import {setViewCountDataTC} from "./visitorCounterReducer";
import {setUsersDataTC} from "./usersReducer";


type ActionType = SetInitializedAT

type InitializedType = {
    initialized: boolean
}

let initialState: InitializedType = {
    initialized: false
}

export const appReducer = (state: InitializedType = initialState, action: ActionType): InitializedType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state

    }
}
//--------------------------------------SET-INITIALIZED-AC-------------------------------
const SET_INITIALIZED = "SET_INITIALIZED"
type SetInitializedAT = {
    type: typeof SET_INITIALIZED
}
export const setInitializedAC = (): SetInitializedAT => ({
    type: SET_INITIALIZED
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const setInitializedTC = () => (dispatch: Dispatch<any>) => {
    let pr1 = dispatch(setDataTC())
    let pr2 = dispatch(setFingerPrintTC())
    let pr3 = dispatch(setUsersDataTC())
    let pr4 = dispatch(setViewCountDataTC())
    Promise.all([pr1, pr2, pr3, pr4]).then(() => {
        dispatch(setInitializedAC())
    })

}