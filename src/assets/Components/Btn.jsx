import React from 'react'

const Btn = (props) => {
    const {text,className,style,icon} = props
  return (
    <button style={style} className={className}>{text}{icon}</button>
  )
}

export default Btn
