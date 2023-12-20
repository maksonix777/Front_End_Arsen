import React from 'react'
import s from "./Slogan.module.css"

export default function Slogan() {
  return (
    <div className={s.main}>
        <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>
        <p>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
    </div>
  )
}
