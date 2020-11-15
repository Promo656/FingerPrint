import {UserAPI} from "../../DAL/API/api";
import {Dispatch} from "redux";

type ActionType = SetDataAT

type DataType = {
    businessName: string
    businessWebsite: string
    city: string
    continent: string
    country: string
    countryCode: string
    ipName: string
    ipType: string
    isp: string
    lat: string
    lon: string
    org: string
    query: string
    region: string
    status: string
}

let initialState: DataType = {
    businessName: " ",
    businessWebsite: "",
    city: "",
    continent: "",
    country: "",
    countryCode: "",
    ipName: "",
    ipType: "",
    isp: "",
    lat: "",
    lon: "",
    org: "",
    query: "",
    region: "",
    status: ""
}

export const dataReducer = (state: DataType = initialState, action: ActionType): DataType => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-DATA-AC-------------------------------
const SET_DATA = "dataReducer/SET_DATA"
type SetDataAT = {
    type: typeof SET_DATA
    payload: DataType
}
export const setDataAC = (payload: DataType): SetDataAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const setDataTC = () => async (dispatch: Dispatch) => {
    let response = await UserAPI.getData()
    dispatch(setDataAC(response))
}