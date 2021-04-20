import React, {useState, useEffect} from "react";

export const Timer = (props) => {
  const [second, setSecond] = useState(props.time)
  const [isStart, setStart] = useState(false)
  useEffect (() => {
    if (isStart) {
          setTimeout(() => {
      if (second > 0) {
         setSecond(second - props.step)
      }
    }, 1000);
    }
  })

const textButton = isStart ? 'Stop' : 'Start'

  return (
    <div className="App">
      <button className="clock" onClick={() => setStart(!isStart)}>{textButton}</button>
      <button onClick={() => {
        setSecond(props.time);
        setStart(true)
      }}>Restart</button>
      <h1>Time: {second === 0 ? 'Time is up' : second}</h1>
    </div>
  )
}