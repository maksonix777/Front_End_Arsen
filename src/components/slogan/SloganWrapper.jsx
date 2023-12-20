import React from 'react'
import Slogan from './Slogan'
import s from "./SloganWrapper.module.css"

export default function SloganWrapper() {
  return (
    <div className={s.wrapper}><Slogan/></div>
  )
}
