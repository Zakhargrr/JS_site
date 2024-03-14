import React from 'react'
import './style.css'

const comp_button = ({label, onCLick}) =>{
    return <button onClick={onCLick}>{label}!</button>
}
export default comp_button