import React, {useState, useEffect} from "react";
import { Display } from "./Display";

export const Timer = (props) => {
  const [second, setSecond] = useState(props.time)
  const [autoStart] = useState(props.autoStart)
  const [isStart, setStart] = useState(autoStart)

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
const disabledRestart = second === 0 ? false : true

  return (
    <div className="App">
      <button className="btn" onClick={() => setStart(!isStart)}>{textButton}</button>
      <button className="btn" onClick={() => {
        setSecond(props.time);
        setStart(true)
      }} disabled={disabledRestart}>Restart</button>
       {second === 0 ? 'Time is up' : <Display time={second} />}
    </div>
  )
}