import {Dispatch} from "redux";
import {UserAPI} from "../../DAL/API/api";
import {StateType} from "../Store/redux-store";
import {getfp} from "../Tools/FingerPrint";

type ActionType = SetDataAT

type ViewCountType = {
    count: number
}
let initialState: ViewCountType = {
    count: 0
}

export const viewCounterReducer = (state: ViewCountType = initialState, action: ActionType): ViewCountType => {
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
//--------------------------------------SET-DATA-AC-------------------------------
const SET_DATA = "counterReducer/SET_DATA"
type SetDataAT = {
    type: typeof SET_DATA
    payload: ViewCountType
}
export const setCountDataAC = (payload: ViewCountType): SetDataAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const setViewCountDataTC = () => async (dispatch: Dispatch, getState: () => StateType) => {

    let viewCountData = await UserAPI.getViewCountData()
    dispatch(setCountDataAC(viewCountData))

    let response



    const count = getState().viewCount.count += 1
    await UserAPI.incrementCount(count)

    dispatch(setCountDataAC(viewCountData))

}