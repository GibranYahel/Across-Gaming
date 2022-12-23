import React from 'react'
import css from './Header.module.css'
import LOGO2 from '../../assets/LOGO2.png'
import { FcSearch } from 'react-icons/fc'

export const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}> 
        <img src={LOGO2} alt="" />
        <span>Across Gaming</span>
      </div>

      {/* click Tester */}

      <div className={css.right}>
        
        <div className={css.menu}> 
          <ul className={css.menu}>
            <li>Perfil</li>
            <li>Registrate</li>
            <li>Social</li>
            <li>Partners</li>
            <li>Productos</li>
          </ul>
        </div>

        <input type="text" className={css.search} placeholder="Minecraft" />

        <FcSearch className={css.loopa} />
      </div>
    </div>
  )
}
