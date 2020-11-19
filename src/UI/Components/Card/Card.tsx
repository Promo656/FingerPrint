import React from "react"
import style from "./Card.module.scss"
import ip from "../../icon/ip.png"
import location from "../../icon/location.png"
import provider from "../../icon/hosting.png"
import countOfView from "../../icon/view.png"
import headers from "../../icon/http.png";
import {HeadersType} from "../../../BLL/reducers/appReducer";
import {Paper} from "@material-ui/core";

type CardPropsType = {
    ip: string
    viewCount: number
    city: string
    country: string
    provider: string
    headers: HeadersType
}

export function Card(props: CardPropsType) {
    let arrKeys = Object.keys(props.headers)

    return (
        <div className={style.wrap}>
            <div className={style.card}>
                <img src={ip} alt=""/>
                <span className={style.card_data}>{props.ip}</span>
            </div>
            <div className={style.card}>
                <img src={location} alt=""/>
                <span className={style.card_data}>{`${props.country}, ${props.city}`}</span>
            </div>
            <div className={style.card}>
                <img src={provider} alt=""/>
                <span className={style.card_data}>{props.provider}</span>
            </div>
            <div className={style.card}>
                <img src={headers} alt=""/>
                <Paper elevation={5} className={style.card_http}>
                    {
                        arrKeys.map((k,id) =>
                            <span key={id}><b>{k}:</b> <i>{props.headers[k]}</i></span>)
                    }
                </Paper>
            </div>
            <div className={style.card}>
                <img src={countOfView} alt=""/>
                <span className={style.card_data}>{props.viewCount}</span>
            </div>
        </div>
    )
}