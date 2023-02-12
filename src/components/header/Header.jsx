import React, { useState } from 'react'
import css from './Header.module.css'
import LOGO2 from '../../assets/LOGO2.png'
import { Link, Outlet } from 'react-router-dom'
import FPerfil from '../../assets/imagen-minecraft.jpg'
import { DropDownProfile } from '../DropDownProfile/DropDownProfile'
import { Desplegable } from '../NochDesplegable/Desplegable'
import { Desplegable01 } from '../NochDesplegable/Desplegable01';
import { TextField } from '@mui/material'


export const Header = () => {

  const [openProfile, setOpenProfile] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);


  return (
    <div className={css.container}>
      <div onClick={() => setOpenDrop
          ((prev) => !prev) }>

          <div className={css.Desplegable}>
            <Desplegable />
          </div>
      </div>
      
      <div className={css.logo}> 
        <img src={LOGO2} alt="" />
        <span>Across Gaming</span>
      </div>  

      <div className={css.right}>
        
        <div className={css.menu}> 
          <ul className={css.menu}>
            <li><Link to="/registrate">Registrate</Link></li>
            <li><Link to="/social">Social</Link></li>
            <li><Link to="/clicktester">click Tester</Link></li>
          </ul>
          <Outlet />
        </div>

        <TextField 
          className={css.TextField}
          label="Minecraft"
          type="text"
          placeholder='Recusrsos'
        />

        <img className={css.FPerfil} src={FPerfil} onClick={() => setOpenProfile
          ((prev) => !prev) } />
        
        {
          openProfile && <DropDownProfile />
        }
        {
          openDrop && <Desplegable01 />
        }
        
      </div>
    </div>
  )
}
