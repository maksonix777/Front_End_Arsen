import React from 'react'
import s from './HeaderContent.module.css'
export default function HeaderContent() {
  return (
    <div className={s.main}> 
        <div className={s.content}>
        <h1 className={s.title}>Веломастерская “Велозар”</h1>
        <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и 
        хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
        </div>
       <div>
        <img className={s.img} src="Assets/din 1.png" alt="dino"  />
       </div>
    </div>
  )
}
