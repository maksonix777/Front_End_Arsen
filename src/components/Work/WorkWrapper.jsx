import React from 'react'
import Work from './Work'
import s from "./WorkWrapper.module.css"

export default function WorkWrapper() {
    const products = [
        {id:1, title:'Годовое ТО' , color: '#22356F'}, 
        {id:2, title:'Выравнивание колес', color:'#0052C1'},
        {id:3, title: 'Настройка переключателей', color:'#76B58B'}
    ]

return (
    <div className={s.wrapper}> 

    {

        products.map(elem =>
        <Work   title = {elem.title}
                color = {elem.color}
                key = {elem.id} />)
    }


    </div>
)
}
