import React from 'react'
import css from "Header.module.css"

export const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            logo
        </div>

        <div className={css.right} >
            <div className={css.menu}></div>

        </div>
        <input type="text" className={css.search}/>
        <span>PNG icon of chart</span>
    </div>
  )
}
