import React from 'react'
import css from './Drop.module.css'

export const DropDownProfile = () => {
  return (
    <div className={css.DropDown}>
        <ul className={css.DropDownUl}>
            <li>Profile</li>
            <li>Opcion2</li>
            <li>Opcion3</li>
            <li>Opcion4</li>
            <li>Cerrar sesion</li>
        </ul>
    </div>
  )
}
