

export default function Counter1(props) {
  return (
    <div>
        <button onClick={props.IncreaseCount} className={props.look}>
        {/* {props.count} */}👍
        </button>
    </div>
  )
}
