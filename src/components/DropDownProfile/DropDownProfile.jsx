import React from 'react'
import css from './Drop.module.css'
import { Link, Outlet } from 'react-router-dom'

export const DropDownProfile = () => {
  return (
    <div className={css.DropDown}>
        <ul className={css.DropDownUl}>
            <li><Link to="/perfil">Perfil</Link></li>
            <li>Amigos</li>
            <li>Opcion3</li>
            <li>Opcion4</li>
            <li>Cerrar sesion</li>
        </ul>
        <Outlet />
        
    </div>
  )
}
