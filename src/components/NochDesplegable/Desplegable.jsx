import React from 'react'
import css from './Desplegable.module.css'

export const Desplegable = () => {
  return (
    <div className={css.NavDesplegable}>
        <nav>
            <ul>
                <li><a href="#"></a>
                    <div>
                        <ul>
                            <li><a href="">Categorias</a></li>
                            <li><a href="">Categorias</a></li>
                            <li><a href="">Categorias</a></li>
                            <li><a href="">Categorias</a></li>
                            <li><a href="">Categorias</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}
