import {setIpDataTC} from "./iPdataReducer";
import {setFingerPrintTC} from "./fingerPrintReducer";
import {setCountDataAC} from "./visitorCounterReducer";
import {setUsersDataAC, setUsersDataTC} from "./usersReducer";
import {UserAPI} from "../../DAL/API/api";
import {AppActionsType, StateType} from "../Store/redux-store";
import {getHttpHeaders} from "../Tools/utilits";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type AppActionType = SetInitializedAT | SetHeadersAT

export type HeadersType = {
    [key: string]: string
}

type InitializedType = {
    initialized: boolean
    headers: HeadersType
}

let initialState: InitializedType = {
    initialized: false,
    headers: {}
}

export const appReducer = (state: InitializedType = initialState, action: AppActionType): InitializedType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        case SET_HEADERS: {
            return {
                ...state,
                headers: {...action.payload}
            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-INITIALIZED-AC-------------------------------
const SET_INITIALIZED = "appReducer/SET_INITIALIZED"
type SetInitializedAT = {
    type: typeof SET_INITIALIZED
}
export const setInitializedAC = (): SetInitializedAT => ({
    type: SET_INITIALIZED
})
//--------------------------------------SET-HEADERS-AC-------------------------------
const SET_HEADERS = "appReducer/SET_HEADERS"
type SetHeadersAT = {
    type: typeof SET_HEADERS
    payload: HeadersType
}
export const setHeadersAC = (payload: HeadersType): SetHeadersAT => ({
    type: SET_HEADERS,
    payload: payload
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
type ThunkType = ThunkAction<void, StateType, unknown, AppActionsType>

export const setInitializedTC = (): ThunkType => async (dispatch: ThunkDispatch<StateType, unknown, AppActionsType>) => {

    let headers = getHttpHeaders()
    await dispatch(setHeadersAC(headers))

    let response = await UserAPI.getUsersInfo()
    await dispatch(setUsersDataAC(response))

    let viewCountData = await UserAPI.getViewCountData()
    await dispatch(setCountDataAC(viewCountData))

    await dispatch(setIpDataTC())
    await dispatch(setFingerPrintTC())
    await dispatch(setUsersDataTC())

    await dispatch(setInitializedAC())
}