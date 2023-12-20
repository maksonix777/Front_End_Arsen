import React from 'react'
import s from "./Work.module.css"

export default function Work({key, title, color}) {
    const itemstyle = {backgroundColor:color}
    return (
    <div className={s.wrapper} style={itemstyle}>
        <div className={s.deco}></div>
        <h2>{title}</h2>
       
    </div>
    )
}
