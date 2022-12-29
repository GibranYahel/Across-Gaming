import React from 'react'
import css from './Click.module.css'
import video from '../../assets/videos/Espadachin.mp4'

export const ClickTester = () => {
    
    
    return (
    <div className={css.container1}>
        <div className={css.clickBg}>
            <div className={css.imagen}>
                <video loop
                    className='clip'
                    src={video} 
                    type='video/mp4'>

                </video>
            </div>
        </div>
        <hr />
    </div>
  )
}
