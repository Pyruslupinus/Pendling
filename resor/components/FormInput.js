import React, {useState} from "react"


const ContBtn = () => {
  const [contcrt, setcontcrt] = useState(0)
  
 //   let contcrt = 0

    const handelClick = () => {
        setcontcrt(contcrt + 1)
    }
    
  return (
    <div>
      <button onClick={handelClick}>+1</button>
      <div>{contcrt}</div>
    </div>
  )
}
