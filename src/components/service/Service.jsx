import React from 'react'
import s from "./Service.module.css"

export default function Service() {
  return (
    <div className={s.main}>
        <img src="Assets/bicycle.png" alt="" />
        <div className={s.title}> 
            <p>Прокат велосипедов</p>
            <p>У нас вы можете взять на прокат хорошо обслуженные
                 и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
        </div>
    </div>
  )
}
