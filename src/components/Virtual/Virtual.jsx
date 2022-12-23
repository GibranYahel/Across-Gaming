import React from 'react'
import ImageSlider from 'react-image-comparison-slider';
import css from './Virtual.module.css'

export const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>Diferencia Con Texture Packs!!</span>
        <span><h3>Visualiza si te gusta antes de descargarlo!</h3></span>
        <span>INTENTALO!! :D</span>
        <img src="src/assets/Crafting.webp" alt="" />
      </div>

      <div className={css.right}>
        <ImageSlider 
        image1="src/assets/Captura2.png"
        image2="src/assets/Captura1.png"
        />
      </div>
    </div>
  );
};