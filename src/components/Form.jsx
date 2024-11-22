

import React from 'react'

function Form({userName}) {

    const handleChange = (ev) => {
        
        
    }
    
  return (
    <form className="form">
        <label htmlFor="name">Nombre</label> 
        <input type="text" name="name" id="name" value={userName} onChange={handleChange} />
    </form>
  )
}

export default Form