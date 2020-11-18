import React from "react";
import {connect} from "react-redux";
import {StateType} from "./BLL/Store/redux-store";
import {setInitializedTC} from "./BLL/reducers/appReducer";
import {CircularProgress, Paper} from "@material-ui/core";
import style from "./App.module.scss"
import done from "./UI/icon/checkmark.png"
import fault from "./UI/icon/error.png"
import provider from "./UI/icon/hosting.png"
import location from "./UI/icon/location.png"
import ip from "./UI/icon/ip.png"
import countOfView from "./UI/icon/view.png"



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
            return <CircularProgress className={style.preLoader}/>
        }

        return (
            <Paper elevation={6} className={style.wrap}>
                <div className={style.cardBlock}>
                    <div className={style.card}>
                        <img src={ip} alt=""/>
                        <span className={style.card_data}>{this.props.ip}</span>
                    </div>
                    <div className={style.card}>
                        <img src={location} alt=""/>
                        <span className={style.card_data}>{`${this.props.country}, ${this.props.city}`}</span>
                    </div>
                    <div className={style.card}>
                        <img src={provider} alt=""/>
                        <span className={style.card_data}>{this.props.provider}</span>
                    </div>
                    <div className={style.card}>
                        <img src={countOfView} alt=""/>
                        <span className={style.card_data}>{this.props.viewCount}</span>
                    </div>
                </div>
                <div></div>

                <div className={style.privacy}>
                    <div className={style.privacy_card}>
                        <span>
                            {this.props.vpn ? <img src={done}/> : <img src={fault}/>}</span>
                        <span>VPN</span>
                    </div>
                    <div className={style.privacy_card}>
                        <span>
                            {this.props.tor ? <img src={done}/> : <img src={fault}/>}</span>
                        <span>TOR</span>
                    </div>
                    <div className={style.privacy_card}>
                        <span>
                            {this.props.proxy ? <img src={done}/> : <img src={fault}/>}</span>
                        <span>PROXY</span>
                    </div>
                </div>
            </Paper>
        );
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
    vpn: store.currentIpUserInfo.privacyData.vpn
})

export default connect(mapStateToProps, {setInitializedTC})(App)
