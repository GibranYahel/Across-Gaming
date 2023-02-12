import React from 'react'
import './style.css'
import { Followers } from '../components/Followers/Followers'

export const Perfil = () => {
  return (

    <div className='Perfil'>
      <div className='Portada'>
        <img src="src/assets/Captura2.png" alt="Imagen de portada" />
        <img src="src/assets/Pasto.png" />
      </div>
      <div className='Perfil-img'>
        <img src="src/assets/Steve_img.jpg" />
        <img src="src/assets/Experiencia.png" />
      </div>
      <Followers />
    </div>
  )
}
