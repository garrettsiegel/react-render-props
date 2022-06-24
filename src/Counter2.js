import React from 'react'

export default function Counter2(props) {
  return (
    <div>
        <button onClick={props.DecreaseCount} className={props.look}>
        {/* {props.count} */}👎
        </button>
    </div>
  )
}
