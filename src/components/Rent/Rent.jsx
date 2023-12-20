import React from 'react'
import s from "./Rent.module.css"


export default function Rent() {
  return (
    
    <div className={s.content}>
        
      <div className={s.main}>
        <h2 className={s.title}>Что мы предлагаем</h2>
        <p>В нашей мастерской можно выполнить 
            комплексное техническое обслуживание 
            велосипеда, ремонт и настройку всех его 
            узлов, шиномонтажные работы. Вовремя 
            проведенное ТО велосипеда помогает избежать
             многих проблем и дорогого ремонта.
               Все работы выполняем качественно и с 
         душой. </p>

      </div>
      <img src="Assets/image.png" alt="" />
    </div>
  )
}
