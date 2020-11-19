import React from "react"
import style from "./Privacy.module.scss"
import done from "../../icon/checkmark.png"
import fault from "../../icon/error.png"

type PrivacyPropsType = {
    proxy: boolean
    tor: boolean
    vpn: boolean
}

export function Privacy(props: PrivacyPropsType) {
    return (
        <div className={style.privacy}>
            <div className={style.privacy_card}>
                        <span>
                            {props.vpn
                                ? <img src={done} alt=""/>
                                : <img src={fault} alt=""/>
                            }
                        </span>
                <span>VPN</span>
            </div>
            <div className={style.privacy_card}>
                        <span>
                            {props.tor
                                ? <img src={done} alt=""/>
                                : <img src={fault} alt=""/>
                            }
                        </span>
                <span>TOR</span>
            </div>
            <div className={style.privacy_card}>
                        <span>
                            {props.proxy
                                ? <img src={done} alt=""/>
                                : <img src={fault} alt=""/>
                            }
                        </span>
                <span>PROXY</span>
            </div>
        </div>)
}