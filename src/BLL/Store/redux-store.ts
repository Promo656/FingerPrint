import {applyMiddleware, combineReducers, createStore} from "redux";
import thinkMiddleware from "redux-thunk"
import {AppActionType, appReducer} from "../reducers/appReducer";
import {iPdataReducer, IpDataActionType} from "../reducers/iPdataReducer";
import {FingerPrintActionsType, fingerPrintReducer} from "../reducers/fingerPrintReducer";
import {ViewCounterActionType, viewCounterReducer} from "../reducers/visitorCounterReducer";
import {UserActionType, usersReducer} from "../reducers/usersReducer";

const reducers = combineReducers({
    app: appReducer,
    currentIpUserInfo: iPdataReducer,
    currentFPUserInfo: fingerPrintReducer,
    viewCount: viewCounterReducer,
    savedUsers: usersReducer
})

export const store = createStore(reducers, applyMiddleware(thinkMiddleware))
export type StateType = ReturnType<typeof reducers>
export type  AppActionsType =
    AppActionType
    | IpDataActionType
    | FingerPrintActionsType
    | UserActionType
    | ViewCounterActionType
//@ts-ignore
window.store = store