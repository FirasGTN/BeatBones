import React from 'react'
import '../styles/Button.css'
import { useDispatch } from 'react-redux'

function Button(props) {
  const dispatch = useDispatch()
  return (
    <button className='bt' style={{color:props.color}} onClick={()=>dispatch(props.fn)} ><p className='tag-btn'>{props.name}</p></button>
  )
}

export default Button