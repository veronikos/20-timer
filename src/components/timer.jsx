import React, {useState, useEffect} from "react";
import { Display } from "./Display";

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
      <button className="btn" onClick={() => setStart(!isStart)}>{textButton}</button>
      <button className="btn" onClick={() => {
        setSecond(props.time);
        setStart(true)
      }}>Restart</button>
       {second === 0 ? 'Time is up' : <Display time={second} />}
    </div>
  )
}