import React from 'react'
import css from './Desplegable.module.css'

export const Desplegable01 = () => {
  return (
    <div className={css.MenuDrop}>
            <ul className={css.MenuDropUl}>
                <li><img src="src/assets/Cohete.png"/> Skins</li>
                <li><img src="src/assets/Creeper.png"/> Mods</li>
                <li><img src="src/assets/Arbusto.webp"/> Capas</li>
                <li><img src="src/assets/pico.png"/> Recursos</li>
                <li><img src="src/assets/Redstone.webp"/> Productos</li>
            </ul>
    </div>
  )
}
