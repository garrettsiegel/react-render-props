import React, { useState } from 'react'

export default function Wrapper2(props) {
    
    const [look, setLook] = useState('box')

    const DecreaseCount = () => {
            if (look === 'box') {
                setLook('box2')
            } else {
                setLook('box')
            }
   }

  return (
    
    <div>
        {props.render( DecreaseCount, look )}
    </div>
  )
}





