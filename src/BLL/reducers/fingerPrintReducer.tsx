import {Dispatch} from "redux";
import {getfp} from "../Tools/FingerPrint";

type ActionType = SetDataAT
/*type FingerPrintType = {
    audio: {
        value: number
        duration: number
    }
    availableScreenResolution: {
        value: Array<number>
        duration: number
    }
    canvas: {
        value: {
            data: string
            winding: boolean
        }
        duration: number
    }
    chrome: {
        value: boolean
        duration: number
    }
    colorDepth: {
        value: number
        duration: number
    }
    cookiesEnabled: {
        value: boolean
        duration: number
    }
    cpuClass: {
        value: any
        duration: number
    }
    deviceMemory: {
        value: number
        duration: number
    }
    emptyEvalLength: {
        value: number
        duration: number
    }
    errorFF: {
        value: boolean
        duration: number
    }
    fonts: {
        value: Array<string>
        duration: number
    }
    hardwareConcurrency: {
        value: number
        duration: number
    }
    indexedDB: {
        value: boolean
        duration: number
    }
    languages: {
        value: Array<Array<string>>
        duration: number
    }
    localStorage: {
        value: boolean
        duration: number
    }
    openDatabase: {
        value: boolean
        duration: number
    }
    osCpu: {
        value: any
        duration: number
    }
    platform: {
        value: string
        duration: number
    }
    plugins: {
        value: Array<{
            description: string
            name: string
            mimeTypes: Array<{
                suffixes: string
                type: string
            }>
        }>
        duration: number
    }
    pluginsSupport: {
        value: boolean
        duration: number
    }
    productSub: {
        value: string
        duration: number
    }
    screenResolution: {
        value: Array<number>
        duration: number
    }
    sessionStorage: {
        value: boolean
        duration: number
    }
    timezone: {
        value: string
        duration: number
    }
    timezoneOffset: {
        value: number
        duration: number
    }
    touchSupport: {
        value: {
            maxTouchPoints: number
            touchEvent: boolean
            touchStart: boolean
        }
        duration: number
    }
    vendor: {
        value: string
        duration: number
    }
}*/
type FingerPrintType={
    visitorId:string
}
let initialState:FingerPrintType = {
    visitorId:""
}

 const fingerPrintReducer = (state:FingerPrintType = initialState, action: ActionType):FingerPrintType => {
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
const SET_DATA = "fingerPrintReducer/SET_DATA"
type SetDataAT = {
    type: typeof SET_DATA
    payload: FingerPrintType
}
 const setDataAC = (payload: any): SetDataAT => ({
    type: SET_DATA,
    payload: payload
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
 const setFingerPrintTC = () => async (dispatch: Dispatch) => {
    let fingerPrint = await getfp()
    dispatch(setDataAC(fingerPrint))
}