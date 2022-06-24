import React, { useState } from 'react'

export default function Wrapper(props) {
    const [look, setLook] = useState('box')

    const IncreaseCount = () => {
        if (look === 'box') {
            setLook('box3')
        } else {
            setLook('box')
        }
    }

  return (
    
    <div>
        {props.render( IncreaseCount, look )}
    </div>
  )
}
