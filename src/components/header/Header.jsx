import React from 'react'
import s from "./Header.module.css"
import HeaderContent from '../headerContent/HeaderContent'
export default function Header() {
  return (
    <div>
        <div> 
             <div className={s.header}>
                <img className={s.img} src="Assets/logodino.png" alt="logo"/>
                <ul className={s.menu_btn}>
                    <li className={s.btn} >О нас</li>
                    <li className={s.btn}>Услуги</li>
                    <li className={s.btn}>Аренда</li>
                </ul>
                <button>Связаться</button>
             </div>
            
        </div>
       <HeaderContent/>
    </div>
  )
}
