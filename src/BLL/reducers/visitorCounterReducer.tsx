import {Dispatch} from "redux";
import {UserAPI} from "../../DAL/API/api";
import {AppActionsType, StateType} from "../Store/redux-store";

export type ViewCounterActionType = SetViewCountAT

type ViewCountType = {
    count: number
}
let initialState: ViewCountType = {
    count: 0
}

export const viewCounterReducer = (state: ViewCountType = initialState, action: ViewCounterActionType): ViewCountType => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                count: action.payload.count
            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-VIEW-COUNT-AC-------------------------------
const SET_DATA = "counterReducer/SET_DATA"
type SetViewCountAT = {
    type: typeof SET_DATA
    payload: ViewCountType
}
export const setCountDataAC = (payload: ViewCountType): SetViewCountAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-VIEW-COUNT-TC-------------------------------
export const setViewCountDataTC = () => async (dispatch: Dispatch<AppActionsType>, getState: () => StateType) => {
    const count = getState().viewCount.count += 1
    await UserAPI.incrementCount(count)
}