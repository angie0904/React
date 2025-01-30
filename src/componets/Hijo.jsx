import React from 'react'
import css from './Hijo.module.css'

const Hijo = ({color}) => {
  return (
    <>
        <div className={css.hijo} style={{background: color}}></div>
    </>
  )
}

export default Hijo