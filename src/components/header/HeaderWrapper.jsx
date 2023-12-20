import React from 'react'
import Header from './Header'
import s from "./HeaderWrapper.module.css"


export default function HeaderWrapper() {
  return (
    <div className={s.main}> 
       <Header/>
    </div>
  )
}
