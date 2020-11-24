import React from "react";
import {connect} from "react-redux";
import {StateType} from "./BLL/Store/redux-store";
import {HeadersType, setInitializedTC} from "./BLL/reducers/appReducer";
import {CircularProgress, Paper} from "@material-ui/core";
import style from "./App.module.scss"
import {Card} from "./UI/Components/Card/Card";
import {Privacy} from "./UI/Components/Privacy/Privacy";

type MSTP = {
    initialized: boolean
    ip: string
    viewCount: number
    city: string
    country: string
    provider: string
    proxy: boolean
    tor: boolean
    vpn: boolean
    headers: HeadersType
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
              return "Privacy API trial has ended. Subscribe now!"
           // return <CircularProgress/>
        }

        return (
            <Paper elevation={6} className={style.wrap}>
                <Card
                    ip={this.props.ip}
                    viewCount={this.props.viewCount}
                    city={this.props.city}
                    country={this.props.country}
                    provider={this.props.provider}
                    headers={this.props.headers}
                />
                <Privacy
                    proxy={this.props.proxy}
                    tor={this.props.tor}
                    vpn={this.props.vpn}
                />
            </Paper>
        )
    }
}

const mapStateToProps = (store: StateType) => ({
    initialized: store.app.initialized,
    ip: store.currentIpUserInfo.ipData.query,
    viewCount: store.viewCount.count,
    city: store.currentIpUserInfo.ipData.region,
    country: store.currentIpUserInfo.ipData.country,
    provider: store.currentIpUserInfo.ipData.org,
    proxy: store.currentIpUserInfo.privacyData.proxy,
    tor: store.currentIpUserInfo.privacyData.tor,
    vpn: store.currentIpUserInfo.privacyData.vpn,
    headers: store.app.headers
})

export default connect(mapStateToProps, {setInitializedTC})(App)

