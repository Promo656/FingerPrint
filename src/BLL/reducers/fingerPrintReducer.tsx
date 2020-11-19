import {Dispatch} from "redux";
import {getFp} from "../Tools/utilits";
import {AppActionsType} from "../Store/redux-store";

export type FingerPrintActionsType = SetFingerPrintAT

type FingerPrintType = {
    visitorId: string

}
let initialState: FingerPrintType = {
    visitorId: ""
}

export const fingerPrintReducer = (state: FingerPrintType = initialState, action: FingerPrintActionsType) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                visitorId: action.payload.visitorId
            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-FINGER-PRINT-AC-------------------------------
const SET_DATA = "fingerPrintReducer/SET_DATA"
type SetFingerPrintAT = {
    type: typeof SET_DATA
    payload: FingerPrintType
}
export const setDataAC = (payload: FingerPrintType): SetFingerPrintAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-FINGER-PRINT-TC-------------------------------
export const setFingerPrintTC = () => async (dispatch: Dispatch<AppActionsType>) => {
    let visitor = await getFp()
    dispatch(setDataAC({visitorId: visitor.visitorId}))
}