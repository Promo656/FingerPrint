import {Dispatch} from "redux";
import {StateType} from "../Store/redux-store";
import {UserAPI} from "../../DAL/API/api";
import {getfp} from "../Tools/FingerPrint";

type ActionType = SetInitializedAT

type infoIpTypeType = {
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
type FingerPrintType = {
    visitorId: string
}
type UserType = {
    id: string
    ip: string
}
type InitializedType = {
    initialized: boolean
    viewCount: number
    ipInfo: infoIpTypeType
    fingerPrintInfo: FingerPrintType
    users: UserType[]
}


let initialState: InitializedType = {
    initialized: false,
    viewCount: 0,
    ipInfo: {
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
    },
    fingerPrintInfo: {
        visitorId: ""
    },
    users: [{id: "926c82a62089bfab744fa3439585ee8d", ip: "95.55.125.169"}]
}

export const appReducer = (state: InitializedType = initialState, action: ActionType): InitializedType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                ...action.payload,
                initialized:true
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
    payload: InitializedType
}
const setInitializedAC = (payload: InitializedType): SetInitializedAT => ({
    type: SET_INITIALIZED,
    payload: payload
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const setInitializedTC = () => async (dispatch: Dispatch<any>, getState: () => StateType) => {
    const data = await UserAPI.getData()
    dispatch(setInitializedAC(data))

    const ipData = await UserAPI.getIpData()
    const fingerPrintData = await getfp()



    /*    let pr1 = dispatch(setDataTC())
        let pr2 = dispatch(setFingerPrintTC())
        let pr3 = dispatch(setUsersDataTC())
        let pr4 = dispatch(setViewCountDataTC())

        Promise.all([pr1, pr2, pr3, pr4]).then(() => {
            dispatch(setInitializedAC())
        })*/
}

const setDataTC = () => async (dispatch: Dispatch) => {
    /*  let response = await UserAPI.getData()
      dispatch(setDataAC(response))*/
}

const setFingerPrintTC = () => async (dispatch: Dispatch) => {
    /*  let fingerPrint = await getfp()
      dispatch(setDataAC(fingerPrint))*/
}

const setViewCountDataTC = () => async (dispatch: Dispatch, getState: () => StateType) => {

    /*    const viewCountData = await UserAPI.getViewCountData()
        dispatch(setCountDataAC(viewCountData))

        const newId = getState().fingerPrintInfo.visitorId
        let filteredArray = getState().usersInfo.users.filter(el => el.id === newId)

        if (filteredArray.length === 0) {
            const count = getState().viewCount.count += 1
            await UserAPI.incrementCount(count)
        }*/
}

const setUsersDataTC = () => async (dispatch: Dispatch, getState: () => StateType) => {
    /*    const response = await UserAPI.getUsersInfo()
        dispatch(setUsersDataAC(response))

        const id = getState().fingerPrintInfo.visitorId
        const ip = getState().ipInfo.query

        const newId = getState().fingerPrintInfo.visitorId
        let filteredArray = getState().usersInfo.users.filter(el => el.id === newId)

        if (filteredArray.length === 0) {

            dispatch(setUsersDataAC({ users: [{id, ip}]}))
            UserAPI.writeInformation(getState().usersInfo)
        }*/


}