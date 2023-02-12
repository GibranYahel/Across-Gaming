import React from 'react'
import ClickPersSecond from '../components/ClickPerSecond/ClickPerSecond'
import { Desplegable } from '../components/NochDesplegable/Desplegable'
import { LogInModal } from '../components/LogInModal/LogInModal'

export const Clicktester = () => {
  return (
    <div>
      <LogInModal />
      <Desplegable />
      <ClickPersSecond />  

    </div>
  )
}