import {Dispatch} from "redux";
import {UserAPI} from "../../DAL/API/api";
import {StateType} from "../Store/redux-store";

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
export const setViewCountDataTC = () => async (dispatch: Dispatch<any>, getState: () => StateType) => {

   /* let viewCountData = await UserAPI.getViewCountData()
    console.log(viewCountData)
    dispatch(setCountDataAC(viewCountData))*/


/*    let newId = getState().currentFPUserInfo.visitorId
    let newIp = getState().currentIpUserInfo.query


    let filteredArray = getState().savedUsers.users.filter(el => el.id === newId || el.ip === newIp)

    if (filteredArray.length === 0) {

    }*/
    const count = getState().viewCount.count += 1
    await UserAPI.incrementCount(count)

}