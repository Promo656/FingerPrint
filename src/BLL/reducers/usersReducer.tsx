import {UserAPI} from "../../DAL/API/api";
import {AppActionsType, StateType} from "../Store/redux-store";
import {setViewCountDataTC} from "./visitorCounterReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type UserActionType = SetUserDataAT

type UserType = {
    userIp: string
    userId: string

}

export type UsersType = {
    users: UserType[]
}

let initialState: UsersType = {
    users: []
}

export const usersReducer = (state: UsersType = initialState, action: UserActionType): UsersType => {
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
//--------------------------------------SET-USER-AC-------------------------------
const SET_DATA = "usersReducer/SET_DATA"
type SetUserDataAT = {
    type: typeof SET_DATA
    payload: UsersType
}
export const setUsersDataAC = (payload: UsersType): SetUserDataAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-USER-TC-------------------------------
type ThunkType = ThunkAction<void, StateType, unknown, AppActionsType>

export const setUsersDataTC = (): ThunkType => async (dispatch: ThunkDispatch<StateType, unknown, AppActionsType>, getState: () => StateType) => {
    let id = getState().currentFPUserInfo.visitorId
    let ip = getState().currentIpUserInfo.ipData.query

    let filteredArray = getState().savedUsers.users.filter(el => {
            return el.userId === id || el.userIp === ip
        }
    )

    if (filteredArray.length === 0) {
        let payload: UsersType = {
            users: [
                {
                    userId: id,
                    userIp: ip,
                }
            ]
        }
        await dispatch(setUsersDataAC(payload))
        await UserAPI.writeInformation(getState().savedUsers)
        await dispatch(setViewCountDataTC())
    }
}