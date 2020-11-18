import {UserAPI} from "../../DAL/API/api";
import {Dispatch} from "redux";

type ActionType = SetDataAT

type DataType = {
    ipData: {
        businessName: string
        businessWebsite: string
        city: string
        continent: string
        country: string
        countryCode: string
        ipName: string
        ipType: string
        isp: string
        lat:string
        lon: string
        org: string
        query: string
        region:string
        status: string
    }
    privacyData: {
        vpn: boolean,
        proxy: boolean,
        tor: boolean,
        hosting: boolean
    }
}

let initialState: DataType = {
    ipData: {
        businessName: "",
        businessWebsite: "",
        city: "",
        continent: "",
        country: "",
        countryCode: "",
        ipName: "",
        ipType: "",
        isp: "",
        lat:"",
        lon: "",
        org: "",
        query: "",
        region:"",
        status: "",
    },
    privacyData: {
        vpn: false,
        proxy: false,
        tor: false,
        hosting: false
    }
}

export const dataReducer = (state:DataType = initialState, action: ActionType):DataType => {
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
export const setDataAC = (payload: any): SetDataAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const setDataTC = () => async (dispatch: Dispatch<any>) => {
    let response = await UserAPI.getIpData()

    console.log(response)
    dispatch(setDataAC(response));
}
