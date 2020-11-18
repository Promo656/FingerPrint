import {Dispatch} from "redux";
import {setDataTC} from "./dataReducer";
import {setFingerPrintTC} from "./fingerPrintReducer";
import {setCountDataAC, setViewCountDataTC} from "./visitorCounterReducer";
import {setUsersDataAC, setUsersDataTC} from "./usersReducer";
import {UserAPI} from "../../DAL/API/api";
import {StateType} from "../Store/redux-store";
import {request} from "https";


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
export const setInitializedTC = () => async (dispatch: Dispatch<any>, getState: () => StateType) => {


    let response = await UserAPI.getUsersInfo()
    await dispatch(setUsersDataAC(response))

    let viewCountData = await UserAPI.getViewCountData()
    dispatch(setCountDataAC(viewCountData))


    await dispatch(setDataTC())
    await dispatch(setFingerPrintTC())
    //await dispatch(setViewCountDataTC())
    await dispatch(setUsersDataTC())

    dispatch(setInitializedAC())

    /*Promise.all([pr1, pr2]).then(() => {
        Promise.all([pr3]).then(() => {
            Promise.all([pr4]).then(()=>{

            })
        })
    })*/

}