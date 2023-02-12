import React from 'react'
import css from './Followers.module.css'

export const Followers = () => {
  return (
    <div className={css.FollowsContainer}>
        <div className={css.Nicks}>
            <h1>@Keciyo</h1>
            <h3>SuperKeciyo</h3>
            <div className={css.Followers}>
                <span>999</span>
                <br />
                <span>Seguidores</span>
            </div>
            <div className={css.Followin}>
                <span>1K</span>
                <br />
                <span>seguidos</span>
            </div>
        </div>
        <div className={css.Redes}>
            <ul>
                <li><img src="src/assets/Youtube.png"/></li><li>Youtube</li>
                <li><img src="src/assets/Twitter.png"/></li><li>Twitter</li>
                <li><img src="src/assets/Facebook.png"/></li><li>Facebook</li>
                <li><img src="src/assets/TikTok.png"/></li><li>TikTok</li>
                <li><img src="src/assets/Instagram.png"/></li><li>Instagram</li>
            </ul>
        </div>
    </div>
  )
}
