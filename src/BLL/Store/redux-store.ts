import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thinkMiddleware from "redux-thunk"
import {appReducer} from "../reducers/appReducer";
import {dataReducer} from "../reducers/dataReducer";
import {fingerPrintReducer} from "../reducers/fingerPrintReducer";
import {viewCounterReducer} from "../reducers/visitorCounterReducer";
import {usersReducer} from "../reducers/usersReducer";


const reducers = combineReducers({
    app: appReducer,
    currentIpUserInfo: dataReducer,
    currentFPUserInfo: fingerPrintReducer,
    viewCount: viewCounterReducer,
    savedUsers: usersReducer
})
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thinkMiddleware)))
export type StateType = ReturnType<typeof reducers>
//@ts-ignore
window.store = store