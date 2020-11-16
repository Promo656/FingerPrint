import React from "react";
import {connect} from "react-redux";
import {StateType} from "./BLL/Store/redux-store";
import {setInitializedTC} from "./BLL/reducers/appReducer";

type MSTP = {
    initialized: boolean
    ip: string
    ipName: string
    viewCount: number
    city: string
    country: string
    provider: string
}
type MDTP = {
    setInitializedTC: () => void
}
type AppPropsType = MSTP & MDTP

class App extends React.Component<AppPropsType> {
    componentDidMount() {

        this.props.setInitializedTC()
    }

    render() {
        if (!this.props.initialized) {
            return "Loading"
        }

        return (
            <div>
               {/* <div>{`Ваш IP адрес : ${this.props.ip}`}</div>
                <div>{`Имя вашего компьютера : ${this.props.ipName}`}</div>
                <div>{`Ваше местоположение: : ${this.props.country}, ${this.props.city}`}</div>
                <div>{`Ваш провайдер : ${this.props.provider}`}</div>*/}
                <div>{`Количество посещений : ${this.props.viewCount}`}</div>
            </div>
        );
    }
}

const mapStateToProps = (store: StateType) => ({
    initialized: store.app.initialized,
    ip: store.app.ipInfo.query,
    ipName: store.app.ipInfo.ipName,
    viewCount: store.app.viewCount,
    city: store.app.ipInfo.region,
    country: store.app.ipInfo.country,
    provider: store.app.ipInfo.org
})

export default connect(mapStateToProps, {setInitializedTC})(App)
