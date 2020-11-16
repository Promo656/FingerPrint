import {Dispatch} from "redux";
import {UserAPI} from "../../DAL/API/api";
import {StateType} from "../Store/redux-store";
import {getfp} from "../Tools/FingerPrint";

/*
type UserType = {
    user: {
        id: string
        ip: string
    }

}
type UsersType = {
    users: UserType
    usersCount: number
}
let initialState: UsersType = {
    usersCount: 0,
    users: {
        user: {id: "", ip: ""},
        user:{id: "", ip: ""}
    }
}
*/

type ActionType = SetDataAT

type UserType = {
    id: string
    ip: string
}
export type UsersType = {
    users: UserType[]

}
let initialState: UsersType = {

    users: []
}

 const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,

                users: [...state.users, ...action.payload.users]
            }
        }
        default:
            return state

    }
}
//--------------------------------------SET-DATA-AC-------------------------------
const SET_DATA = "usersReducer/SET_DATA"
type SetDataAT = {
    type: typeof SET_DATA
    payload: UsersType
}
 const setUsersDataAC = (payload: UsersType): SetDataAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
 const setUsersDataTC = () => async (dispatch: Dispatch, getState: () => StateType) => {
/*    const response = await UserAPI.getUsersInfo()
    dispatch(setUsersDataAC(response))

    const id = getState().fingerPrintInfo.visitorId
    const ip = getState().ipInfo.query

    const newId = getState().fingerPrintInfo.visitorId
    let filteredArray = getState().usersInfo.users.filter(el => el.id === newId)
debugger
    if (filteredArray.length === 0) {

        dispatch(setUsersDataAC({ users: [{id, ip}]}))
        UserAPI.writeInformation(getState().usersInfo)
    }*/


}