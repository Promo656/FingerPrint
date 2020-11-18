import {Dispatch} from "redux";
import {UserAPI} from "../../DAL/API/api";
import {StateType} from "../Store/redux-store";
import {getfp} from "../Tools/FingerPrint";
import {setViewCountDataTC} from "./visitorCounterReducer";

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
    platform:string

}
export type UsersType = {
    users: UserType[]

}
let initialState: UsersType = {

    users: [
        /*  {ip:"",id:""}*/
    ]
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
export const setUsersDataTC = () => async (dispatch: Dispatch<any>, getState: () => StateType) => {
    /* let response = await UserAPI.getUsersInfo()
     dispatch(setUsersDataAC(response))*/

    let id = getState().currentFPUserInfo.visitorId
    let ip = getState().currentIpUserInfo.ipData.query
    let platform = getState().currentFPUserInfo.userPlatform


    let filteredArray = getState().savedUsers.users.filter(el => (el.id === id && el.platform===platform)|| el.ip === ip )

    if (filteredArray.length === 0) {
        dispatch(setUsersDataAC({users: [{id, ip, platform}]}))
        await UserAPI.writeInformation(getState().savedUsers)
        dispatch(setViewCountDataTC())
    }

}