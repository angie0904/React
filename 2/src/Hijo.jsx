import React, { useState } from 'react'

const Hijo = ({trae}) => {
  const nombre="Alex";
    return (
    <>
    
    <button onClick={()=>trae(nombre)}>login</button>
    </>
  )
}

export default Hijo