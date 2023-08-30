import React from 'react'
import '../styles/input.css'

type props = {
    value: string,
    onChange: any
    type: string,
    label: string,
}

function Input({onChange, type, value, label}: props) {
  return (
    <div className='input'>
        <span className='label'>{label}</span>
        <input className='in' type={type} value={value} onChange={(e)=>{onChange(e.target.value)}}/>
    </div>
  )
}

export default Input