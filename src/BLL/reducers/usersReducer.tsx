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

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
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
export const setUsersDataAC = (payload: UsersType): SetDataAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const setUsersDataTC = () => async (dispatch: Dispatch, getState: () => StateType) => {
    let response = await UserAPI.getUsersInfo()
    console.log(response)
    dispatch(setUsersDataAC(response))

    let aboutUser = await getfp()
    let id = aboutUser.visitorId
    let ip = getState().ipInfo.query

    let payload: UsersType = {
        users: [{id, ip}]
    }

    dispatch(setUsersDataAC(payload))

    UserAPI.writeInformation(getState().usersInfo)
}