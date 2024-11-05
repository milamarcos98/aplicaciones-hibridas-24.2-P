import React from 'react'

const Button = ({texto, style, click, color}) => {
  return (
    <button style={style} className={'btn btn-' + color} onClick={click}>
        {texto}
    </button>
  )
}

export default Button