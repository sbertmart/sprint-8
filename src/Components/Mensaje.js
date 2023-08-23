import { useState } from 'react'
    
    const Mensaje = (props) => {
    
      return (
        <div className={props.error}>{props.mensaje}</div>
      )
    }
    
    export default Mensaje