import {UserAPI} from "../../DAL/API/api";
import {Dispatch} from "redux";
import {AppActionsType} from "../Store/redux-store";

export type IpDataActionType = SetIpDataAT

type IpDataType = {
    ipData: {
        continent: string
        country: string
        org: string
        query: string
        region: string
    }
    privacyData: {
        vpn: boolean,
        proxy: boolean,
        tor: boolean
    }
}

let initialState: IpDataType = {
    ipData: {
        continent: "",
        country: "",
        org: "",
        query: "",
        region: ""
    },
    privacyData: {
        vpn: false,
        proxy: false,
        tor: false
    }
}

export const iPdataReducer = (state: IpDataType = initialState, action: IpDataActionType): IpDataType => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                privacyData: {
                    vpn: action.payload.privacyData.vpn,
                    tor: action.payload.privacyData.tor,
                    proxy: action.payload.privacyData.proxy
                },

                ipData: {
                    region: action.payload.ipData.region,
                    query: action.payload.ipData.query,
                    org: action.payload.ipData.org,
                    country: action.payload.ipData.country,
                    continent: action.payload.ipData.continent
                }
            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-IP-DATA-AC-------------------------------
const SET_DATA = "iPdataReducer/SET_DATA"
type SetIpDataAT = {
    type: typeof SET_DATA
    payload: IpDataType
}
export const setIpDataAC = (payload: IpDataType): SetIpDataAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-IP-DATA-TC-------------------------------
export const setIpDataTC = () => async (dispatch: Dispatch<AppActionsType>) => {
    let response = await UserAPI.getIpData()
    dispatch(setIpDataAC(response))
}
